import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
const cors = require('cors');
import postRoutes from './routes' // bring in the routes to use here and then remove them below

const users = require('../data/users');
const posts = require('../data/posts');

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(cors());

// do some basic error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message })
})

app.locals = {
    title: 'SHINE',
    users,
    posts
};

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Welcome to SHINE');
})

app.get('/api/v1/posts', (req: Request, res: Response, next: NextFunction) => {
    const posts = app.locals.posts
    res.json({ posts });
})

app.get('/api/v1/posts/:pid', (req: Request, res: Response, next: NextFunction) => {
    const { pid } = req.params;
    const post: object = app.locals.posts.find((post: { pid: number; }) => post.pid === Number(pid));
    console.log(typeof pid);

    if (!post) {
        return res.sendStatus(404);
    }
    res.status(200).json(post);
})

app.post('/api/v1/posts', (req: Request, res: Response, next: NextFunction) => {
    const pid = Date.now();
    const post = req.body;

    for (let requiredParam of ['uid', 'title', 'content']) {
        if (!post[requiredParam]) {
            res.status(422)
                .send({ error: `Please complete all fields.` });
        }
    }

    const { uid, title, content } = post
    app.locals.posts.push({ uid, title, content, pid });
    res.status(201).json({ uid, title, content, pid });
})

// spin up the server and show confirmation message of port
app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})
