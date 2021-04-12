import { Router } from 'express';

const router = Router();

// get all posts
router.get('/api/v1/posts/')

// get one post
router.get('/api/v1/posts/:pid')

// add a new post
router.post('/api/v1/posts/')


export default router;
