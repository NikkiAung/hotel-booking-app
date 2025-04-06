import { UserInput } from "../../types/user";
import { login, register } from "../../controllers/user";
import { Response } from "express";
export const userResolvers = {
  Query: {
    currentUser: async (_: any, __: any, { user }: { user: any }) => {
      return user;
    },
  },
  Mutation: {
    register: async (_: any, { userInput }: { userInput: UserInput }) =>
      await register(userInput),
    login: async (
      _: any,
      { email, password }: { email: string; password: string },
      { res }: { res: Response }
    ) => await login(email, password, res),
  },
};
