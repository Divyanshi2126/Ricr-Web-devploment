import contactModel from "../models/contactModel.js";
import restaurantModel from "../models/restaurantModel.js"; // Model import karna na bhoolein

// Pehle se maujood function
export const NewContact = async (req, res) => { 
  /* ... logic ... */ 
};

// YE WALA ADD KAREIN (export keyword ke saath)
export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await restaurantModel.find(); // Database se data nikalna
    res.status(200).json({
      success: true,
      data: restaurants
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};