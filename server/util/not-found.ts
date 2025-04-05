import { GraphQLError } from "graphql";

export class NotFoundError extends GraphQLError {
  constructor(errMessage: string) {
    super(errMessage, {
      extensions: {
        code: "NOT_FOUND",
      },
    });
  }
}
