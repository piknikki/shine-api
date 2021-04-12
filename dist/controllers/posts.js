"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getPosts = void 0;
const posts_1 = require("../models/posts");
// const users = require('../data/users');
const posts = require('../data/posts');
const POSTS = posts;
const getPosts = (req, res, next) => {
    res.json({ posts: POSTS });
};
exports.getPosts = getPosts;
const createPost = (req, res, next) => {
    const postBody = req.body;
    const newPost = new posts_1.Post(Date.now(), postBody.uid, postBody.title, postBody.content);
    POSTS.push(newPost);
    // this is what is returned as the response so that client can use it
    res.status(201).json({ message: 'Success! Post created.', createdPost: newPost });
};
exports.createPost = createPost;
