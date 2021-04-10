const express = require('express'); // import express
const app = express();  // create an instance of express

const users = require('./data/users')
const posts = require('./data/posts')

// set a port for the app
app.set('port', process.env.PORT || 5000);

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
  res.json({ posts })
})

// dynamic route for individual posts
app.get('/api/v1/posts/:pid', (req, res) => {
  const { pid } = req.params
  const post = app.locals.posts.find(post => post.pid === Number(pid))
  console.log(typeof pid)

  if (!post) {
    return res.sendStatus(404)
  }
  res.status(200).json(post)
})

// spin up the server and show confirmation message of port
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})
