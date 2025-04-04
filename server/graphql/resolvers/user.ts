import { UserInput } from "../../types/user";
import { register } from "../../controllers/user";
export const userResolvers = {
  Query: {},
  Mutation: {
    register: async (_: any, { userInput }: { userInput: UserInput }) =>
      await register(userInput),
  },
};
