import { UserInput } from "../types/user";
import { User } from "../models/user";
export const register = async (userInput: UserInput) => {
  const { name, email, password } = userInput;
  return await User.create({
    name,
    email,
    password,
  });
};
