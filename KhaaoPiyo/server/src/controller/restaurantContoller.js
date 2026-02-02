import cloudinary from "../config/cloudinary.js";
import Restaurant from "../models/restaurantModel.js";
import bcrypt from "bcrypt";

/* ================= UPDATE RESTAURANT PROFILE ================= */

export const RestaurantUpdate = async (req, res, next) => {
  try {
    const {
      restaurantName,
      managerName,
      email,
      phone,
      address,
      cuisineType,
    } = req.body;

    const currentRestaurant = req.user; // auth middleware se aa raha hoga

    if (!restaurantName || !managerName || !email || !phone) {
      const error = new Error("All Feilds Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("OldData: ", currentRestaurant);

    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      { _id: currentRestaurant._id },
      {
        restaurantName,
        managerName,
        email,
        phone,
        address,
        cuisineType,
      },
      { new: true }
    );

    console.log("Updated Restaurant: ", updatedRestaurant);

    res.status(200).json({
      message: "Restaurant Updated Successfully",
      data: updatedRestaurant,
    });
  } catch (error) {
    next(error);
  }
};

/* ================= CHANGE RESTAURANT PHOTO ================= */

export const RestaurantChangePhoto = async (req, res, next) => {
  try {
    const currentRestaurant = req.user;
    const dp = req.file;

    if (!dp) {
      const error = new Error("Profile Picture required");
      error.statusCode = 400;
      return next(error);
    }

    console.log("DP:", dp);

    if (currentRestaurant.photo.publicID) {
      await cloudinary.uploader.destroy(
        currentRestaurant.photo.publicID
      );
    }

    const b64 = Buffer.from(dp.buffer).toString("base64");
    const dataURI = `data:${dp.mimetype};base64,${b64}`;

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Cravings/Restaurant",
      width: 500,
      height: 500,
      crop: "fill",
    });

    currentRestaurant.photo.url = result.secure_url;
    currentRestaurant.photo.publicID = result.public_id;

    await currentRestaurant.save();

    res.status(200).json({
      message: "Restaurant Photo Updated",
      data: currentRestaurant,
    });
  } catch (error) {
    next(error);
  }
};

/* ================= RESET PASSWORD ================= */

export const RestaurantResetPassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const currentRestaurant = req.user;

    if (!oldPassword || !newPassword) {
      const error = new Error("All feilds required");
      error.statusCode = 400;
      return next(error);
    }

    const isVerified = await bcrypt.compare(
      oldPassword,
      currentRestaurant.password
    );

    if (!isVerified) {
      const error = new Error("Old Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);

    currentRestaurant.password = hashPassword;
    await currentRestaurant.save();

    res.status(200).json({
      message: "Password Reset Successful",
    });
  } catch (error) {
    next(error);
  }
};
