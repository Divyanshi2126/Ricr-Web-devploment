import User from "../models/userModel.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullname, email, phone, password } = req.body;
    if (!fullname || !email || !phone || !password) {
      const error = new error("all feild required");
      error.statuscode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      error.StatusCode = 409;
      return next(error);
    }

    const newUser = await User.create({
      fullname,
      email,
      phone,
      password,
    });

    console.log(newUser);

    const error = new Error("User Created Successfully");
    error.StatusCode = 201;
    return next(error);
  } catch (error) {
    console.log(error);

    next(error);
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new error("all feild required");
      error.statuscode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new error("user not found");
      error.statuscode = 404;
      return next(error);
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
      const error = new error("User not Authorized");
      error.statuscode = 402;
      return next(error);
    }

    console.log(newUser);

    res.status(200).json({ message: "Welcome back", data: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const UserLogout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullname, email, phone } = req.body;
    if (!fullname || !email || !phone) {
      const error = new error("all feild required");
      error.statuscode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new error("user not found");
      error.statuscode = 404;
      return next(error);
    }

    existingUser.fullname=fullname;
    existingUser.phone=phone;

    await existingUser.save();

    res.status(200).json({message:"user update succesfully ", data: existingUser});



  } catch (error) {
    console.log(error);
    next(error);
  }
};
