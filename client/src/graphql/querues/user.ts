import { gql } from "@apollo/client";

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;

export const LOG_OUT = gql`
  query LogOut {
    logout
  }
`;
