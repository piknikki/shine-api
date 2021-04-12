import { Router } from 'express';
import {getPosts, createPost, updatePost} from "../controllers/posts";

const router = Router();

// get all posts
router.get('/', getPosts)

// get one post
router.get('/:pid')

// edit a post -- todo ==> can I just use a post or do I have to use patch??
router.patch('/:pid', updatePost)

// add a new post
router.post('/', createPost)


export default router;
