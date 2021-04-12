import { RequestHandler } from 'express';
import { Post } from "../models/posts";
// const users = require('../data/users');
const posts = require('../data/posts');

const POSTS: Post[] = posts

export const getPosts: RequestHandler = (req, res, next) => {
    res.json({ posts: POSTS })
}

export const createPost: RequestHandler = (req, res, next) => {
    const postBody = (req.body as {uid: number, title: string, content: string })

    const newPost = new Post(Date.now(), postBody.uid, postBody.title, postBody.content)

    POSTS.push(newPost)

    // this is what is returned as the response so that client can use it
    res.status(201).json({ message: 'Success! Post created.', createdPost: newPost })
}

