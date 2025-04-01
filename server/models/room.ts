import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: [true, "Please enter roomNumber."],
    },
    type: {
      type: String,
      required: [true, "Please enter roomType."],
    },
    pricePerNight: {
      type: Number,
      required: [true, "Please enter pricePerNight."],
    },
    capacity: {
      type: Number,
      required: [true, "Please enter roomCapacity."],
    },
    isAvailable: {
      type: Boolean,
      required: [true, "Please enter roomStatus."],
    },
    images: [
      {
        url: String,
        public_id: String,
      },
    ],
    reviews: [String],
    location: {
      type: String,
      required: [true, "Please enter roomLocation."],
    },
  },
  {
    timestamps: true,
  }
);

export const Room = mongoose.model("Room", roomSchema);
