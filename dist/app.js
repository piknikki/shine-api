"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const cors = require('cors');
const posts_1 = __importDefault(require("./routes/posts")); // bring in the routes to use here and then remove them below
app.set('port', process.env.PORT || 5000);
app.use(express_1.default.json());
app.use(cors());
// set up root route for posts
app.use('/api/v1/posts', posts_1.default);
// do some basic error handling
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
// spin up the server and show confirmation message of port
app.listen(app.get('port'), () => {
    console.log(`SHINE is running on http://localhost:${app.get('port')}.`);
});
