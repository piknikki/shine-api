"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const users = require('../../data/users');
const USERS = users;
const getUsers = (req, res, next) => {
    res.json({ users: USERS });
};
exports.getUsers = getUsers;
const getUserById = (req, res, next) => {
    const userId = req.params.uid;
    const foundUser = USERS.find(user => user.uid === Number(userId));
    res.status(201).json({ message: 'Success!', user: foundUser });
};
exports.getUserById = getUserById;
