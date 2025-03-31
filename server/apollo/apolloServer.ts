import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Application, json } from "express";
import { roomTypeDefs } from "../typeDefs/room";

export const startApolloServer = async (app: Application) => {
  const typeDefs = [roomTypeDefs];
  const resolvers: any = [];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const appoloServer = new ApolloServer({ schema });

  await appoloServer.start();

  app.use("/graphql", json(), expressMiddleware(appoloServer));
};
