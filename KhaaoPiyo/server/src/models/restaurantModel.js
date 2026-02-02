import mongoose from "mongoose";

const restaurantSchema = mongoose.Schema(
  {
    restaurantName: {
      type: String,
      required: true,
    },
    managerName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["restaurant"],
      default: "restaurant",
    },

    address: {
      type: String,
      required: true,
      default: "N/A",
    },
    city: {
      type: String,
      required: true,
      default: "N/A",
    },
    pin: {
      type: String,
      required: true,
      default: "N/A",
    },

    photo: {
      url: {
        type: String,
        default: "",
      },
      publicID: {
        type: String,
        default: "",
      },
    },

    geoLocation: {
      lat: {
        type: String,
        required: true,
        default: "N/A",
      },
      lon: {
        type: String,
        required: true,
        default: "N/A",
      },
    },

    paymentDetails: {
      upi: {
        type: String,
        required: true,
        default: "N/A",
      },
      account_number: {
        type: String,
        required: true,
        default: "N/A",
      },
      ifs_Code: {
        type: String,
        required: true,
        default: "N/A",
      },
    },

    cuisine: {
      type: String,
      required: true,
      default: "N/A",
    },

    documents: {
      gst: {
        type: String,
        required: true,
        default: "N/A",
      },
      fssai: {
        type: String,
        required: true,
        default: "N/A",
      },
      rc: {
        type: String,
        required: true,
        default: "N/A",
      },
      dl: {
        type: String,
        required: true,
        default: "N/A",
      },
      uidai: {
        type: String,
        required: true,
        default: "N/A",
      },
      pan: {
        type: String,
        required: true,
        default: "N/A",
      },
    },

    menu: [
      {
        name: String,
        price: Number,
        category: String,
        available: Boolean,
      },
    ],
  },
  { timestamps: true }
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
