import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation Register($userInput: UserInput) {
    register(userInput: $userInput) {
      id
    }
  }
`;
