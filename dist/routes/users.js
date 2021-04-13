"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const router = express_1.Router();
// get all users
router.get('/', users_1.getUsers);
// get one user
router.get('/:uid', users_1.getUserById);
// edit user info
router.patch('/:uid', users_1.updateUser);
// add a new user
router.post('/', users_1.createUser);
// delete a user
router.delete('/:uid', users_1.deleteUser);
exports.default = router;
