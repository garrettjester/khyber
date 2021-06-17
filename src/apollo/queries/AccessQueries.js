const {gql} = require('@apollo/client');



export const REQUEST_ACCESS_GRANT = gql`
  mutation RequestAccessGrant($input: RequestAccessGrantInput!) {
    requestAccessGrant(input: $input) {
      success
      message
    }
}
`;

// Checks if the user-entered access code matches
// one on the DB.
export const VERIFY_ACCESS_GRANT = gql`
  mutation VerifyAccessCode($code: String!) {
    verifyAccessGrant(code: $code) {
      success
      message
    }
  }
`