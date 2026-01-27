import express from "express";

import {Userupdate} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";

const router = express.Router();

router.put("/update",protect,Userupdate);

export default router;