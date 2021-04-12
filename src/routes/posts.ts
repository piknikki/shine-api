import { Router } from 'express';
import { getPosts, createPost } from "../controllers/posts";

const router = Router();

// get all posts
router.get('/', getPosts)

// get one post
router.get('/:pid')

// add a new post
router.post('/', createPost)


export default router;
