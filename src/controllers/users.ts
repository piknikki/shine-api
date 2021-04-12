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

// shouldn't password be private? and then I wouldn't need to include it in the update, but how do I set that in model?
export const updateUser: RequestHandler<{uid: number}> = (req, res) => {
    const userId = req.params.uid
    const updatedUser = (req.body as { name: string, screenName: string, password: string, postsLiked: Array<string>, postsSaved: Array<string> })
    const userIndex = USERS.findIndex(user => user.uid === Number(userId))

    if (userIndex < 0) {
        throw new Error('Sorry, no user with that id is found.')
    }

    USERS[userIndex] = new User(USERS[userIndex].uid, updatedUser.name, updatedUser.password, updatedUser.screenName, updatedUser.postsLiked, updatedUser.postsSaved)
    res.status(201).json({ message:  'User successfully updated', updatedUser: USERS[userIndex] })
}

export const createUser: RequestHandler = (req, res) => {
    const userBody = (req.body as { name: string, screenName: string, password: string, postsLiked: Array<string>, postsSaved: Array<string> })
    const newUserIndex = USERS[USERS.length - 1].uid + 1
    console.log(newUserIndex)
    const newUser = new User(newUserIndex, userBody.name, userBody.screenName, userBody.password, userBody.postsLiked, userBody.postsSaved)
}

