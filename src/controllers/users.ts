import { RequestHandler } from 'express';
import { User } from "../models/users";
const users = require('../../data/users');

const USERS: User[] = users;

export const getUsers: RequestHandler = (req, res, next) => {
    res.json({ users: USERS })
}

export const getUserById: RequestHandler<{uid: number}> = (req, res, next) => {
    const userId = req.params.uid
    const foundUser = USERS.find(user => user.uid === Number(userId))

    res.status(201).json({ message: 'Success!', user: foundUser })
}

