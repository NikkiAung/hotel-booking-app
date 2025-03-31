import gql from "graphql-tag";
export const roomTypeDefs = gql`
  type Room {
    id: ID!
    roomNumbers: String!
    name: String!
    type: String!
    pricePerNight: Float!
    capacity: Int!
    isAvailable: Boolean!
  }

  type Query {
  }
  type Mutation {
    
  }
`;
