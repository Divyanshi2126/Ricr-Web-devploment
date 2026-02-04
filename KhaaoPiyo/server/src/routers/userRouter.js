import express from "express";
import {
  UserResetPassword,
  UserChangePhoto,
  UserUpdate,
} from "../controller/userController.js";
import { Protect } from "../middleware/authMiddleware.js";
import multer from "multer";

const router = express.Router();
const Uploads = multer();

router.put("/update", Protect, UserUpdate);
router.patch("/changePhoto", Protect, Uploads.single("image"), UserChangePhoto);
router.patch("/resetPassword", Protect, UserResetPassword);

export default router;
