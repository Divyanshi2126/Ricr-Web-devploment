import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/authToken.js";

/* ============ REGISTER ============ */
export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber, password } = req.body;

    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    return res.status(201).json({
      message: "Registration Successful",
    });
  } catch (error) {
    next(error);
  }
};

/* ============ LOGIN ============ */
export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isVerified) {
      const error = new Error("Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    // ✅ ONLY this (cookie set ho jaayegi)
    genToken(existingUser, res);

    // ✅ password remove
    const { password: _, ...safeUser } = existingUser._doc;

    return res.status(200).json({
      message: "Login Successful",
      data: safeUser,
    });
  } catch (error) {
    next(error);
  }
};

/* ============ LOGOUT ============ */
export const UserLogout = async (req, res, next) => {
  try {
    res.clearCookie("parleG", {
      httpOnly: true,
      sameSite: "lax",
    });

    return res.status(200).json({
      message: "Logout Successful",
    });
  } catch (error) {
    next(error);
  }
};
