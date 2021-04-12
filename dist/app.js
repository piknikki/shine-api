"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const cors = require('cors');
const users = require('../data/users');
const posts = require('../data/posts');
app.set('port', process.env.PORT || 5000);
app.use(express_1.default.json());
app.use(cors());
// do some basic error handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
app.locals = {
    title: 'SHINE',
    users,
    posts
};
app.get('/', (req, res, next) => {
    res.send('Welcome to SHINE');
});
app.get('/api/v1/posts', (req, res, next) => {
    const posts = app.locals.posts;
    res.json({ posts });
});
app.get('/api/v1/posts/:pid', (req, res, next) => {
    const { pid } = req.params;
    const post = app.locals.posts.find((post) => post.pid === Number(pid));
    console.log(typeof pid);
    if (!post) {
        return res.sendStatus(404);
    }
    res.status(200).json(post);
});
app.post('/api/v1/posts', (req, res, next) => {
    const pid = Date.now();
    const post = req.body;
    for (let requiredParam of ['uid', 'title', 'content']) {
        if (!post[requiredParam]) {
            res.status(422)
                .send({ error: `Please complete all fields.` });
        }
    }
    const { uid, title, content } = post;
    app.locals.posts.push({ uid, title, content, pid });
    res.status(201).json({ uid, title, content, pid });
});
// spin up the server and show confirmation message of port
app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
