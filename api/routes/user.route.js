import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
  savePost,
  profilePosts,
  getNotificationNumber
} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/save", verifyToken, savePost);
router.get("/profile/posts", verifyToken, profilePosts);
router.get("/notification", verifyToken, getNotificationNumber);
router.get("/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);



export default router;