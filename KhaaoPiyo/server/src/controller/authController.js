import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res, next) => {
  try {

    console.log(req.body);
    // accept data from frontend
    const { fullName, email, mobileNumber, passWord } = req.body;


    // verify that all data
    if (!fullName || !email || !mobileNumber || !passWord) {
      const error = new Error("all feilds required");
      error.statusCode = 400;
      return next(error);
    }
    console.log({ fullName, email, mobileNumber, passWord });


    const existinguser = await User.findOne({ email });
    if (existinguser) {
      const error = new Error("email already registerd");
      error.statusCode = 409;
      return next(error);
    }

    console.log ("sending data to db");

    // encrpt the password

    const hashpassword = await bcrypt.hash(passWord, 10);

    console.log("passWord hashing Done. hashpassword=",hashpassword);

    // save data to database

    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      passWord: hashpassword,
    });

    // send response to frontend

    console.log(newUser);
    res.status(201).json({ message: "Registration Successfull" });

    // end
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    // fetch data from frontend
    const { email, passWord } = req.body;

    // verfy that all data exist
    if (!email || !passWord) {
      const error = new Error("all feilds required");
      error.statusCode = 400;
      return next(error);
    }
    // check if user is resigetr or not
    const existinguser = await User.findOne({ email });
    if (!existinguser) {
      const error = new Error("email not registerd");
      error.statusCode = 402;
      return next(error);
    }

    // verfy the password

    const isVerified = await bcrypt.compare(passWord, existinguser.passWord);
    if (!isVerified) {
      const error = new Error("password did not match");
      error.statusCode = 400;
      return next(error);
    }

    // send response to frontend

    res.status(200).json({ message: "login Successfull", data: existinguser });

    // end
  } catch (error) {
    next(error);
  }
};

export const Userlogout = async (res, req, next) => {
  try {
    res.status(200).json({ message: "login Successfull" });
  } catch (error) {
    next(error);
  }
};
