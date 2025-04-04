export default (controllerFunction: Function) =>
  (...args: unknown[]) => {
    return Promise.resolve(controllerFunction(...args)).catch((error) => {
      console.log(error.name);
      if (error.name === "CastError") {
        const message = `Data not found. Field : ${error.path}`;
        throw message;
      }

      if (error.name === "ValidationError") {
        const message = Object.values(error.errors).map(
          (err: any) => err.message
        );
        const errorMessage = message.join(", ");
        throw errorMessage;
      }
      throw error;
    });
  };
