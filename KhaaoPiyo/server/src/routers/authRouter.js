import express from "express";
import {
  UserRegister,
  UserLogin,
  UserLogout,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", UserRegister);
router.post("/login", UserLogin);
router.get("/logout", UserLogout);

export default router;