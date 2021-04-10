const express = require('express');
const app = express();
const cors = require('cors');

const users = require('./data/users');
const posts = require('./data/posts');

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(cors());

app.locals = {
  title: 'SHINE',
  users,
  posts
};

app.get('/', (req, res) => {
  res.send('Welcome to SHINE');
})

app.get('/api/v1/posts', (req, res) => {
  const posts = app.locals.posts
  res.json({ posts });
})

app.get('/api/v1/posts/:pid', (req, res) => {
  const { pid } = req.params;
  const post = app.locals.posts.find(post => post.pid === Number(pid));
  console.log(typeof pid);

  if (!post) {
    return res.sendStatus(404);
  }
  res.status(200).json(post);
})

app.post('/api/v1/posts', (req, res) => {
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
  // send back the response with a status code and the body of the post
  res.status(201).json({ uid, title, content, pid });
})

// spin up the server and show confirmation message of port
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})
