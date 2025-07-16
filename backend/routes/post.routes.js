import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  createPost,
  deletePost,
  likeUnlikePost,
  commentOnPost,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", protectedRoute, getAllPosts);
router.get("/user/:username", protectedRoute, getUserPosts);
router.get("/following", protectedRoute, getFollowingPosts);
router.post("/create", protectedRoute, createPost);
router.delete("/:id", protectedRoute, deletePost);
router.post("/like/:id", protectedRoute, likeUnlikePost);
router.get("/likes/:id", protectedRoute, getLikedPosts);
router.post("/comment/:id", protectedRoute, commentOnPost);

export default router;
