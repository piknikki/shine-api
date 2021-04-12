import { RequestHandler } from 'express';
import { Post } from "../models/posts";
// const users = require('../data/users');
// const posts = require('../data/posts');

const POSTS: Post[] = [
    {
        pid: 1001,
        uid: 42001,
        title: "I'm here 4 U",
        content: "You are all bad asses. I believe in you. LMK how I can help you shine!"
    },
    {
        pid: 1002,
        uid: 42002,
        title: "U R a Jedi",
        content: "You should be paid fairly, without compromise. I call it 'aggressive negotiations'."
    },
    {
        pid: 1003,
        uid: 42003,
        title: "Hello, Bonnibel",
        content: "Vampires can't beat ghosts. It's like a rock-paper-scissors thing."
    }
];

export const getPosts: RequestHandler = (req, res, next) => {
    res.json({ posts: POSTS })
}

// todo ==> finish this
// export const getPostById: RequestHandler<{pid: number}> = (req, res, next) => {
//     const postId = req.params.pid
//     const postBody = (req.body as {uid: number, title: string, content: string })
//
//     res.status(201).json({ message: 'Success!',  })
// }

export const updatePost: RequestHandler<{pid: number}> = (req, res, next) => {
    const postId = req.params.pid
    const updatedPost = (req.body as {uid: number, title: string, content: string })

    // find the index of the post we're updating
    const postIndex = POSTS.findIndex(post => post.pid === postId)

    if (postIndex < 0) {
        throw new Error('Could not find post.')
    }

    // todo ==> is there a way to pass these four params in as an object?
    POSTS[postIndex] = new Post(POSTS[postIndex].pid, updatedPost.uid, updatedPost.title, updatedPost.content)
    res.status(201).json({ message: 'Success!',  updatedPost: POSTS[postIndex]})
}

export const createPost: RequestHandler = (req, res, next) => {
    const postBody = (req.body as {uid: number, title: string, content: string })
    const newPost = new Post(Date.now(), postBody.uid, postBody.title, postBody.content)

    POSTS.push(newPost)

    // this is what is returned as the response so that client can use it
    res.status(201).json({ message: 'Success! Post created.', createdPost: newPost })
}



