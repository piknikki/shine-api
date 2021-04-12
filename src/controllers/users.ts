import { RequestHandler } from 'express';
import { User } from "../models/users";
const users = require('../data/users');

const USERS: User[] = users;

export const getUsers: RequestHandler = (req, res, next) => {
    res.json({ users: USERS })
}

