import express from "express";
import {
  getAllDetail,
  getDetail,
  createDetail,
  updateDetail,
  deleteDetail,
} from "../controllers/detail.controller.js";

const router = express.Router();

router.get("/", getAllDetail);
router.get("/:slug", getDetail);
router.post("/", createDetail);
router.put("/:id", updateDetail);
router.delete("/:id", deleteDetail);

export default router;
