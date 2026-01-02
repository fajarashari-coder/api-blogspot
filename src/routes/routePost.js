import express from "express";
import getPostController from "../controller/getPost.js";
import createPost from "../controller/createPost.js";
import updatePost from "../controller/updatePost.js";
import deletePost from "../controller/deletePost.js";
import validasiPostSchema from "../middleware/validasiPostSchema.js";
import validateIdParam from "../middleware/validasiIdSchema.js";

const postRoutes = express.Router();

postRoutes.get("/", getPostController);
postRoutes.post("/", validasiPostSchema, createPost);
postRoutes.put("/:id", validateIdParam, validasiPostSchema, updatePost);
postRoutes.delete("/:id", validateIdParam, deletePost);

export default postRoutes;
