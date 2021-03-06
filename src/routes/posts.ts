import { Router } from 'express';
import {getPosts, getPostById, createPost, updatePost, deletePost} from "../controllers/posts";

const router = Router();

// get all posts
router.get('/', getPosts)

// get one post
router.get('/:pid', getPostById)

// edit a post
router.patch('/:pid', updatePost)

// add a new post
router.post('/', createPost)

// delete a post
router.delete('/:pid', deletePost)

export default router;
