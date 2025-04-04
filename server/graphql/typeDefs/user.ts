import gql from "graphql-tag";

export const userTypeDefs = gql`
  type Avatar {
    url: String!
    public_id: String!
  }
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: [Avatar]
    role: [String]
    createdAt: String!
    updatedAt: String!
  }
`;
