# SHINE api (backend)

### To start the server locally:
## Set Up

Clone down this repo. (Do **NOT** nest it inside your working directory for the front end)

CD into this repo.

Run `npm install`.

Run `npm run dev` to start the server.

The project will run on your localhost *5000*

### Endpoints for Heroku deployment

Posts:

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `https://shine-api.herokuapp.com/api/v1/posts` | GET | not needed | Array of all existing posts: `[{}, {}]` |
| `https://shine-api.herokuapp.com/api/v1/posts/:pid` | GET | not needed | Get one post: `{pid: <number>, uid: <number>, timestamp: <number>, author: <string>, replies: Array<any>}` |
| `https://shine-api.herokuapp.com/api/v1/posts/` | POST | `{pid: <number>, uid: <number>, timestamp: <number>, author: <string>, comment: <string>}` | Create new post: `{ pid: 1003,uid: 42003,author: "Marceline",timestamp: 1618485896651,title: "Hello, Bonnibel",content: "Vampires can't beat ghosts. It's like a rock-paper-scissors thing.",replies: []}` | 
| `https://shine-api.herokuapp.com/api/v1/posts/:pid` | DELETE | not needed | Array of all remaining posts: `[{}, {}]` |

Users:

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `https://shine-api.herokuapp.com/api/v1/users` | GET | not needed | Array of all existing users: `[{}, {}]` |
| `https://shine-api.herokuapp.com/api/v1/users/:id` | GET | not needed | Get one user: `{uid: <number>, name: <string>, screenName: <string>, password: <string>, postsLiked: <array>, postsSaved: <array>}` |
| `https://shine-api.herokuapp.com/api/v1/users/` | POST | `{pid: <number>, uid: <number>, timestamp: <number>, author: <string>, comment: <string>}` | Create new user: `{ uid: 42001,name: "Leia Organa",screenName: "ForceQueen",password: "urMyOnlyHope2021",postsLiked: [],postsSaved: []` | 
| `https://shine-api.herokuapp.com/api/v1/users/:uid` | DELETE | not needed | Array of all remaining posts: `[{}, {}]` |


## Endpoints for running locally

### GET all posts
URL: `http://localhost:5000/api/v1/posts`

### GET one post (by pid)
URL: `http://localhost:5000/api/v1/posts/:pid`

### POST a new post
URL: `http://localhost:5000/api/v1/posts`

