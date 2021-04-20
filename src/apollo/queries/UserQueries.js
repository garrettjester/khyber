const {gql} = require('@apollo/client');


export const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
    }
  }
`;


export const GET_USER = gql`
  query GetUser($id: ID!) {
    firstName
    lastName
    role
  }
`;