const {gql} = require('@apollo/client');

export const CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      firstName
      lastName
      role
      dealer {
        name
        id
      }
    }
  }
`

export const LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;


export const LOG_OUT = gql`
  mutation LogOut {
    logOut {
      success
      message
    }
  }
`;


export const SIGN_IN = gql`
  query SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      accessToken
      
    }
}
`;


export const REFRESH_ACCESS_TOKEN = gql`
  query RefreshAccessToken {
    refreshAccessToken
  }
`