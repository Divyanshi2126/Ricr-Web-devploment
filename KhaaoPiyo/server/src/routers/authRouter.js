import express from 'express';
import {
    UserRegister,
    UserLogin,
    Userlogout,
} from "../controller/authController.js"

const router = express.Router();


router.post("/register",UserRegister);
router.post("/login",UserLogin);
router.get("/logout",Userlogout);

export default router;