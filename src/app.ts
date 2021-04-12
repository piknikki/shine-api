import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();
const cors = require('cors');
import postRoutes from './routes/posts'
import userRoutes from './routes/users'

app.set('port', process.env.PORT ?? 5000);

app.use(express.json());
app.use(cors());

// set up root route for posts
app.use('/api/v1/posts', postRoutes)

// set up root route for users
app.use('/api/v1/users', userRoutes)

// do some basic error handling
app.use((err: Error, req: Request, res: Response) => {
    res.status(500).json({ message: err.message })
})

// spin up the server and show confirmation message of port
app.listen(app.get('port'), () => {
    console.log(`SHINE is running on http://localhost:${app.get('port')}.`);
})
