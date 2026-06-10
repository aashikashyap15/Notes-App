import express from "express";
import { createNotes, getNotes, getNotesById } from "../controllers/noteController.js";

const router = express.Router();

router.get('/', getNotes)
router.post("/", createNotes);
router.get("/:id", getNotesById);

export default router;