import express from "express";

const router = express.Router();


router.post ("/register",Userregister);
router.post ("/login",UserLogin);
router.post ("/logout",UserLogout);

export default router;