import express from 'express';
const app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', (req, res) => {
    res.send('Using the app typescript now')
})

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})
