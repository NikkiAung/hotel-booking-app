import { UserInput } from "../types/user";
import { User } from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Response } from "express";

export const register = async (userInput: UserInput) => {
  const { name, email, password } = userInput;
  return await User.create({
    name,
    email,
    password,
  });
};

export const login = async (email: string, password: string, res: Response) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) throw new Error("Invalid Email or password");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid Email or password");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return user;
};
