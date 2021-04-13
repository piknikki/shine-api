import { Router } from 'express';
import { getUsers, getUserById, updateUser, createUser, deleteUser } from '../controllers/users';

const router = Router()

// get all users
router.get('/', getUsers)

// get one user
router.get('/:uid', getUserById)

// edit user info
router.patch('/:uid', updateUser)

// add a new user
router.post('/', createUser)

// delete a user
router.delete('/:uid', deleteUser)

export default router;
