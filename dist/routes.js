"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
// get all posts
router.get('/api/v1/posts/');
// get one post
router.get('/api/v1/posts/:pid');
// add a new post
router.post('/api/v1/posts/');
exports.default = router;
