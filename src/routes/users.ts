import { Router } from 'express';
import { getUsers, getUserById } from '../controllers/users';

const router = Router()

// get all users
router.get('/', getUsers)

// get one user
router.get('/:uid', getUserById)

// edit user info

// add a new user

// delete a user

export default router;
