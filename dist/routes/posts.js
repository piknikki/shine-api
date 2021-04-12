"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = require("../controllers/posts");
const router = express_1.Router();
// get all posts
router.get('/', posts_1.getPosts);
// get one post
router.get('/:pid');
// add a new post
router.post('/', posts_1.createPost);
exports.default = router;
