import express from "express";
import { NewContact } from "../controller/publicController.js";

const router = express.Router();

router.post('/new-contact',NewContact);

export default router;