"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(uid, name, password, postsLiked, postsSaved) {
        this.uid = uid;
        this.name = name;
        this.password = password;
        this.postsLiked = postsLiked;
        this.postsSaved = postsSaved;
    }
}
exports.User = User;
