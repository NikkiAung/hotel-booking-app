import gql from "graphql-tag";
export const roomTypeDefs = gql`
  type RoomImages {
    url: String!
    public_id: String!
  }

  type Room {
    id: ID!
    roomNumber: String!
    type: String!
    pricePerNight: Float!
    capacity: Int!
    isAvailable: Boolean!
    images: [RoomImages]
    reviews: [String]
    createdAt: String
    updatedAt: String
  }

  input roomInput {
    roomNumber: String!
    type: String!
    pricePerNight: Float!
    capacity: Int!
    isAvailable: Boolean!
    images: [String]
    reviews: [String]
  }

  type Query {
    getAllRooms: [Room]
  }

  type Mutation {
    createNewRoom(roomInput: roomInput!): Room
  }
`;
