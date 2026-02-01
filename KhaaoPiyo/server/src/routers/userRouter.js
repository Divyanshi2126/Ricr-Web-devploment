import express from "express";

import {UserUpdate} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";
import e from "express";

const router = express.Router();


router.put("/update",protect,UserUpdate);

export default router;

