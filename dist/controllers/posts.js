"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = void 0;
const posts_1 = require("../models/posts");
const POSTS = [];
const createPost = (req, res, next) => {
    const newPost = new posts_1.Post(1010, 42004, "First post", "Yo Earl! Hey! You're fired! Ya butt!");
};
exports.createPost = createPost;
