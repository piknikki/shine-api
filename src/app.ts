import express, { Application, Request, Response, NextFunction } from 'express';
const app: Application = express();

app.set('port', process.env.PORT || 5000);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Using the app typescript now')
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})
