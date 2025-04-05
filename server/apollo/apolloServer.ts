import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Application, json, Request, Response } from "express";
import { roomTypeDefs } from "../graphql/typeDefs/room";
import { roomResolvers } from "../graphql/resolvers/room";
import cors from "cors";
import { userTypeDefs } from "../graphql/typeDefs/user";
import { userResolvers } from "../graphql/resolvers/user";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "../middleware/permission";

export const startApolloServer = async (app: Application) => {
  const typeDefs = [roomTypeDefs, userTypeDefs];
  const resolvers = [roomResolvers, userResolvers];

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const schemaWithShield = applyMiddleware(schema, permissions);

  const appoloServer = new ApolloServer({ schema: schemaWithShield });

  await appoloServer.start();

  app.use(
    "/graphql",
    cors({ credentials: true, origin: ["http://localhost:5173"] }),
    json(),
    expressMiddleware(appoloServer, {
      context: async ({ req, res }: { req: Request; res: Response }) => {
        return { req, res };
      },
    })
  );
};
