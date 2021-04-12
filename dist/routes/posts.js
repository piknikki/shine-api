"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = require("../controllers/posts");
const router = express_1.Router();
// get all posts
router.get('/', posts_1.getPosts);
// get one post
router.get('/:pid', posts_1.getPostById);
// edit a post -- todo ==> can I just use a post or do I have to use patch??
router.patch('/:pid', posts_1.updatePost);
// add a new post
router.post('/', posts_1.createPost);
// delete a post
router.delete('/:id', posts_1.deletePost);
exports.default = router;
