# SHINE api (backend)

### To start the server locally:
## Set Up

Clone down this repo. (Do **NOT** nest it inside your working directory for the front end)

CD into this repo.

Run `npm install`.

Run `npm run dev` to start the server.

The project will run on your localhost *5000*


## Endpoints for Heroku deployment

### GET all posts
URL: `https://shine-api.herokuapp.com/api/v1/posts`

### GET one post (by pid)
URL: `https://shine-api.herokuapp.com/api/v1/posts/:pid`

ex: `https://shine-api.herokuapp.com/api/v1/posts/1001`

Sample response (200):
```js
  {
    pid: 1001,
    uid: 42001,
    title: "I'm here 4 U",
    content: "You are all bad asses. I believe in you. LMK how I can help you shine!"
  }
```

Sample response (404):

```js
  { message: 'User with the id of 2 does not exist' }
```

### POST a new post
URL: `https://shine-api.herokuapp.com/api/v1/posts`

Need to pass in:  `{ uid, title, content, pid }`

## Endpoints for running locally

### GET all posts
URL: `http://localhost:5000/api/v1/posts`

### GET one post (by pid)
URL: `http://localhost:5000/api/v1/posts/:pid`

ex: `http://localhost:5000/api/v1/posts/1001`

### POST a new post
URL: `http://localhost:5000/api/v1/posts`

Need to pass in:  `{ uid, title, content, pid }`

