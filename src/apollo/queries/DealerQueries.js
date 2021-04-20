const {gql} = require('@apollo/client');



export const GET_DEALER = gql`
query GetDealer($id: ID!) {
  getDealer(id: $id) {
    name
    manufacturer
    AddressId
  }
}
`;


export const GET_CUSTOMERS = gql`
query GetDealer($id: ID!) {
  getDealer(id:$id) { 
  	customers{
      id
      firstName
      lastName
      email
    }
  }
}
`;


export const VERIFY_ROOT_EMAIL = gql`
  mutation VerifyRootEmail($email: String!) {
    verifyRootEmail(email: $email) {
      success
      message
    }
  }
`;


export const CONFIRM_ROOT_EMAIL = gql`
  mutation ConfirmRootEmail($email: String!, $code: String!) {
    confirmRootEmail(email: $email, code: $code) {
      success
      message
    }
  }
`;


export const CLAIM_ACCESS_CODE = gql`
  mutation ClaimAccessCode($code: String!) {
    claimAccessCode(code: $code) {
      success
      message
  }
}
`


export const CREATE_DEALER = gql`
  mutation CreateDealer($input: CreateDealerInput!) {
    createDealer(input: $input) {
      name
      manufacturer
      dealerCode
    }
  }
`;



export const GET_EMPLOYEES = gql`
  query GetDealer($id: ID!) {
  getDealer(id:$id) { 
    employees {
      firstName
      lastName
      role
      email
    }
  }
}
`