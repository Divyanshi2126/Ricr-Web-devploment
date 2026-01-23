import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const protect = async (req, res, next) => {
  try {
    const biscut = req.cookies.parleG;
    console.log("Token Recived in cookies ;", biscut);

    const tea = jwt.verify(biscut,process.env.JWT_SECRET);
    console.log(tea);
     if(!tea){
        const error = new Error("Unauthorized! please Login Again");
        error.StatusCode = 401;
        next(error);
    }



    const verifiedUser =await  User.findById(tea.id);

    if(!verifiedUser){
        const error = new Error("Unauthorized! please Login Again");
        error.StatusCode = 401;
        next(error);
    }

    req.user = verifiedUser;



    next();
  } catch (error) {
    next(error);
  }
};
