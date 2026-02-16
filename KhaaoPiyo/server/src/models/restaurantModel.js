import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
    restaurantName: {
        type: String,
        required: [true, "Restaurant name is required"],
        trim: true
    },
    cuisine: {
        type: String,
        required: [true, "Cuisine type is required"]
    },
    address: {
        type: String,
        required: [true, "Address is required"]
    },
    city: {
        type: String,
        required: [true, "City is required"]
    },
    pin: {
        type: String,
        required: [true, "PIN code is required"]
    },
    mobileNumber: {
        type: String,
        required: [true, "Mobile number is required"]
    },
    photo: {
        url: {
            type: String,
            default: "https://via.placeholder.com/150" // Default image agar photo na ho
        },
        public_id: {
            type: String
        }
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" // Ye manager (user) se link karne ke liye hai
    }
}, { timestamps: true });

const restaurantModel = mongoose.model("Restaurant", restaurantSchema);

export default restaurantModel; // Ye line lagana mat bhoolna (Backend crash fix karegi)