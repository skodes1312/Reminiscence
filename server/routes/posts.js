import express from "express";
import { createPosts, getPosts } from "../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);

router.post("/create", createPosts);

export default router;
