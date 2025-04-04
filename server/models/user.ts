import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name."],
    },
    email: {
      type: String,
      required: [true, "Please enter email."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter password."],
      minLength: [6, "Password must be at least 6 characters."],
    },
    avatar: {
      url: String,
      public_id: String,
    },
    role: {
      type: [String],
      default: "user",
      enum: {
        values: ["user", "admin"],
        message: "Please select a correct role.",
      },
    },
    resetPasswordToken: String,
    resetPasswordExpire: String,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
