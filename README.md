# SHINE api (backend)

### To start the server locally:
cd into the root of the project and run `npm run start`

The project will run on your localhost *5000*


## Endpoints

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
