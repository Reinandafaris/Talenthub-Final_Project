import express from "express";
import {
  getAllMenu,
  getMenu,
  createMenu,
  deleteMenu,
} from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getAllMenu);
router.get("/:slug", getMenu);
router.post("/", createMenu);
router.delete("/:id", deleteMenu);

export default router;
