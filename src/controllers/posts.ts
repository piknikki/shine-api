import { RequestHandler } from 'express';
import { Post } from "../models/posts";
const posts = require('../../data/posts');

const POSTS: Post[] = posts;

export const getPosts: RequestHandler = (req, res) => {
    res.json({ posts: POSTS })
}

export const getPostById: RequestHandler<{pid: number}> = (req, res) => {
    const postId = req.params.pid
    const foundPost = POSTS.find(post => post.pid === Number(postId))

    res.status(201).json({message: 'Success!', post: foundPost})
}

export const updatePost: RequestHandler<{pid: number}> = (req, res) => {
    const postId = req.params.pid
    const updatedPost = (req.body as {uid: number, timestamp: number,  title: string, author: string, content: string, replies: Array<any> })
    const postIndex = POSTS.findIndex(post => post.pid === Number(postId))

    if (postIndex < 0) {
        throw new Error('Could not find post.')
    }

    // todo ==> is there a way to pass these params in as an object?
    POSTS[postIndex] = new Post(POSTS[postIndex].pid, updatedPost.uid, updatedPost.timestamp, updatedPost.title, updatedPost.author, updatedPost.content, updatedPost.replies)
    res.status(201).json({ message: 'Success!',  updatedPost: POSTS[postIndex]})
}

export const createPost: RequestHandler = (req, res) => {
    const postBody = (req.body as {uid: number, timestamp: number, title: string, author: string, content: string, replies: Array<any> })
    const newPost = new Post(Date.now(), postBody.uid, postBody.timestamp, postBody.title, postBody.author, postBody.content, postBody.replies)

    POSTS.push(newPost)

    res.status(201).json({ message: 'Success! Post created.', createdPost: newPost })
}

export const deletePost: RequestHandler<{pid: number}> = (req, res) => {
    const postId = req.params.pid
    const postIndex = POSTS.findIndex(post => post.pid === Number(postId))

    if (postIndex < 0) {
        throw new Error('Could not find post.')
    }

    POSTS.splice(postIndex, 1)

    res.json({ message: 'Post deleted.' })
}

