import { NotFoundError } from "../util/not-found";
export default (controllerFunction: Function) =>
  (...args: unknown[]) => {
    return Promise.resolve(controllerFunction(...args)).catch((error) => {
      console.log(error.name);
      if (error.name === "CastError") {
        const message = `Data not found. Field : ${error.path}`;
        throw new NotFoundError(message);
      }

      if (error.name === "ValidationError") {
        const message = Object.values(error.errors).map(
          (err: any) => err.message
        );
        const errorMessage = message.join(", ");
        throw new NotFoundError(errorMessage);
      }

      if (error.name === "MongoServerError") {
        const message = "Email already exists";
        throw message;
      }
      throw error;
    });
  };
