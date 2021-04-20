import {
  ApolloClient, 
  HttpLink, 
  concat, 
  //createHttpLink, 
  InMemoryCache,
  fromPromise,
 // ApolloLink,
  //HttpLink
} from "@apollo/client"


import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import {accessToken, storeLogin} from '../utils/auth'
import { REFRESH_ACCESS_TOKEN } from "./queries/AuthQueries";
import history from "../utils/history"

let apolloClient;

const silentRefresh = () => {
  return apolloClient.query({ query: REFRESH_ACCESS_TOKEN}).then((response) => {
    const {accessToken} = response.data
    return accessToken
  });
};


const errorLink = onError(({graphQLErrors, operation, forward}) => {
  if (graphQLErrors) {
    console.log(graphQLErrors)
    for (let err of graphQLErrors) {
      switch(err.extensions.code) {
        case "UNAUTHORIZED":
        return fromPromise(
          silentRefresh().catch((err) => {
            history.push("/auth")
            return
          })
        )
        .filter((value) => Boolean(value))
        .flatMap((freshAccessToken) => {
          storeLogin(freshAccessToken);
          const oldHeaders = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...oldHeaders,
              Authorization: `Bearer ${freshAccessToken}`
            }
          });
          return forward(operation)
        })
      }
    }
  }
})



const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include'
})


const link = ApolloLink.from([errorLink, httpLink])

const authMiddleware = new ApolloLink((operation, forward) => {
  if (accessToken) {
    operation.setContext({
      headers: { Authorization: `Bearer ${accessToken}`}
    })
  }
  return forward(operation)
})



apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: concat(authMiddleware, link), 
  cache: new InMemoryCache()
});

export default apolloClient;