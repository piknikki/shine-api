import { RequestHandler } from 'express';
import { Post } from "../models/posts";

const POSTS: Post[] = []

export const createPost: RequestHandler = (req, res, next) => {
    const newPost = new Post(1010, 42004, "First post", "Yo Earl! Hey! You're fired! Ya butt!")
}
