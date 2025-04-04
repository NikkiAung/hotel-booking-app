import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
      select: false,
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

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export const User = mongoose.model("User", userSchema);
