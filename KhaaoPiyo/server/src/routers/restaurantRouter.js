import express from "express";

import {
  RestaurantUpdate,
  RestaurantChangePhoto,
  RestaurantResetPassword
} from "../controller/restaurantContoller.js";

import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";

const router = express.Router();

router.put("/update", protect, RestaurantUpdate);

const upload = multer();
router.put("/change-photo", protect, upload.single("photo"), RestaurantChangePhoto);


router.put("/reset-password", protect, RestaurantResetPassword);

export default router;
