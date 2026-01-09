import User from "../models/userModel.js";

export const UserResgister = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;
    if (!fullname || !email || !phone || !password) {
      res.status(400).json({ message: "all feild required" });
      return;
    }

    const newUser = await User.create({
      fullname,
      email,
      phone,
      password,
    });

    console.log(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "User created successfully" });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "all feild required" });
      return;
    }
    const existingUser = await User.find({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
      res.status(402).json({ message: "User not Authorized" });
      return;
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
    res.status(200).json({ message: "LogOut Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
