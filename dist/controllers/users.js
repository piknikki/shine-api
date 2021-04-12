"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.getUsers = void 0;
const users_1 = require("../models/users");
const users = require('../../data/users');
const USERS = users;
const getUsers = (req, res) => {
    res.json({ users: USERS });
};
exports.getUsers = getUsers;
const getUserById = (req, res) => {
    const userId = req.params.uid;
    const foundUser = USERS.find(user => user.uid === Number(userId));
    res.status(201).json({ message: 'Success!', user: foundUser });
};
exports.getUserById = getUserById;
const updateUser = (req, res) => {
    const userId = req.params.uid;
    const updatedUser = req.body;
    const userIndex = USERS.findIndex(user => user.uid === Number(userId));
    if (userIndex < 0) {
        throw new Error('Sorry, no user with that id is found.');
    }
    USERS[userIndex] = new users_1.User(USERS[userIndex].uid, updatedUser.name, updatedUser.screenName, updatedUser.postsLiked, updatedUser.postsSaved);
    res.status(201).json({ message: 'User successfully updated', updatedUser: USERS[userIndex] });
};
exports.updateUser = updateUser;
