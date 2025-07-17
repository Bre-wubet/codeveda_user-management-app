import express from "express";
import {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();
router.use(protect); // All routes below require auth

router.get("/", isAdmin, getUsers);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", isAdmin, deleteUser);

export default router;
