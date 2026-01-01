import express from "express";
import { getPostController } from "../controller/getPost.js";
import createPost from "../controller/createPost.js";
import updatePost from "../controller/updatePost.js";
import deletePost from "../controller/deletePost.js";

const postRoutes = express.Router();

postRoutes.get("/", getPostController);
postRoutes.post("/", createPost);
postRoutes.put("/:id", updatePost);
postRoutes.delete("/:id", deletePost);

export default postRoutes;
