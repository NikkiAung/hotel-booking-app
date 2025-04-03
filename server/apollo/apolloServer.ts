import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Application, json } from "express";
import { roomTypeDefs } from "../graphql/typeDefs/room";
import { roomResolvers } from "../graphql/resolvers/room";
import cors from "cors";

export const startApolloServer = async (app: Application) => {
  const typeDefs = [roomTypeDefs];
  const resolvers = [roomResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const appoloServer = new ApolloServer({ schema });

  await appoloServer.start();

  app.use(
    "/graphql",
    cors({ credentials: true, origin: ["http://localhost:5173"] }),
    json(),
    expressMiddleware(appoloServer)
  );
};
