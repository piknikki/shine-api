"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.createPost = exports.updatePost = exports.getPostById = exports.getPosts = void 0;
const posts_1 = require("../models/posts");
// const users = require('../data/users');
const posts = require('../../data/posts');
const POSTS = posts;
const getPosts = (req, res, next) => {
    res.json({ posts: POSTS });
};
exports.getPosts = getPosts;
const getPostById = (req, res, next) => {
    const postId = req.params.pid;
    const foundPost = POSTS.find(post => post.pid === Number(postId));
    res.status(201).json({ message: 'Success!', post: foundPost });
};
exports.getPostById = getPostById;
const updatePost = (req, res, next) => {
    const postId = req.params.pid;
    const updatedPost = req.body;
    const postIndex = POSTS.findIndex(post => post.pid === Number(postId));
    if (postIndex < 0) {
        throw new Error('Could not find post.');
    }
    // todo ==> is there a way to pass these four params in as an object?
    POSTS[postIndex] = new posts_1.Post(POSTS[postIndex].pid, updatedPost.uid, updatedPost.title, updatedPost.content);
    res.status(201).json({ message: 'Success!', updatedPost: POSTS[postIndex] });
};
exports.updatePost = updatePost;
const createPost = (req, res, next) => {
    const postBody = req.body;
    const newPost = new posts_1.Post(Date.now(), postBody.uid, postBody.title, postBody.content);
    POSTS.push(newPost);
    res.status(201).json({ message: 'Success! Post created.', createdPost: newPost });
};
exports.createPost = createPost;
const deletePost = (req, res, next) => {
    const postId = req.params.pid;
    const postIndex = POSTS.findIndex(post => post.pid === Number(postId));
    if (postIndex < 0) {
        throw new Error('Could not find post.');
    }
    POSTS.splice(postIndex, 1);
    res.json({ message: 'Post deleted.' });
};
exports.deletePost = deletePost;
