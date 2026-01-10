import express from "express";
import { UserRegister,UserLogin,UserLogout,UserUpdate} from "../controllers/mycontroller.js";

const router = express.Router();


router.post ("/register",UserRegister);
router.post ("/login",UserLogin);
router.post ("/logout",UserLogout);
router.put ("/update",UserUpdate);



export default router;