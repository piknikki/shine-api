const express = require('express'); // import express
const app = express();  // create an instance of express
const cors = require('cors');

const users = require('./data/users');
const posts = require('./data/posts');

// set a port for the app
app.set('port', process.env.PORT || 5000);

// parse the req body to json by default
app.use(express.json());
// use cors
app.use(cors());

// make a name for the app
app.locals = {
  title: 'SHINE',
  users,
  posts
};

// create a home route for the app
app.get('/', (req, res) => {
  res.send('Welcome to SHINE');
})

// when this route is accessed, the response will be an object of all posts
app.get('/api/v1/posts', (req, res) => {
  const posts = app.locals.posts
  res.json({ posts });
})

// dynamic route for individual posts
app.get('/api/v1/posts/:pid', (req, res) => {
  const { pid } = req.params;
  const post = app.locals.posts.find(post => post.pid === Number(pid));
  console.log(typeof pid);

  if (!post) {
    return res.sendStatus(404);
  }
  res.status(200).json(post);
})

// adding a post
app.post('/api/v1/posts', (req, res) => {
  const pid = Date.now();
  const post = req.body; // post is everything passed in in the request, should include uid

  // error handling if all fields aren't filled in or there isn't a user id passed in
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
