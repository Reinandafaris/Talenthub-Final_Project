import express from "express";
import {
  getAllCategory,
  getCategory,
  createCategory,
  deleteCategory,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getAllCategory);
router.get("/:slug", getCategory);
router.post("/", createCategory);
router.delete("/:id", deleteCategory);

export default router;
