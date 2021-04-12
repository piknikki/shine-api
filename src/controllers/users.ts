import { RequestHandler } from 'express';
import { User } from "../models/users";
const users = require('../../data/users');

const USERS: User[] = users;

export const getUsers: RequestHandler = (req, res) => {
    res.json({ users: USERS })
}

export const getUserById: RequestHandler<{uid: number}> = (req, res) => {
    const userId = req.params.uid
    const foundUser = USERS.find(user => user.uid === Number(userId))

    res.status(201).json({ message: 'Success!', user: foundUser })
}

export const updateUser: RequestHandler<{uid: number}> = (req, res) => {
    const userId = req.params.uid
    const updatedUser = (req.body as { name: string, screenName: string, postsLiked: Array<string>, postsSaved: Array<string> })
    const userIndex = USERS.findIndex(user => user.uid === Number(userId))

    if (userIndex < 0) {
        throw new Error('Sorry, no user with that id is found.')
    }

    USERS[userIndex] = new User(USERS[userIndex].uid, updatedUser.name, updatedUser.screenName, updatedUser.postsLiked, updatedUser.postsSaved)
    res.status(201).json({ message:  'User successfully updated', updatedUser: USERS[userIndex] })
}

