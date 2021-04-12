"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const cors = require('cors');
const posts_1 = __importDefault(require("./routes/posts"));
const users_1 = __importDefault(require("./routes/users"));
app.set('port', (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000);
app.use(express_1.default.json());
app.use(cors());
// set up root route for posts
app.use('/api/v1/posts', posts_1.default);
// set up root route for users
app.use('/api/v1/users', users_1.default);
// todo ==> fix this it's throwing an error:  'TypeError: res.status is not a function'
// app.use((err: Error, req: Request, res: Response) => {
//     res.status(500).json({ message: err.message })
// })
// spin up the server and show confirmation message of port
app.listen(app.get('port'), () => {
    console.log(`SHINE is running on http://localhost:${app.get('port')}.`);
});
