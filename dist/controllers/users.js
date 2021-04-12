"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const users = require('../data/users');
const USERS = users;
const getUsers = (req, res, next) => {
    res.json({ users: USERS });
};
exports.getUsers = getUsers;
