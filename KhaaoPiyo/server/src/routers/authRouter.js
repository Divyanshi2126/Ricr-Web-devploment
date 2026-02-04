import express from "express";
import {
  UserRegister,
  UserForgetPassword,
  UserGenOTP,
  UserLogin,
  UserLogout,
  UserVerifyOtp,
} from "../controller/authController.js";
import { OtpProtect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);

router.post("/genOtp", UserGenOTP);
router.post("/verifyOtp", UserVerifyOtp);
router.post("/forgetPasword", OtpProtect, UserForgetPassword);

export default router;
