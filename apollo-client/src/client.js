import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { split } from "@apollo/client"
import { getMainDefinition } from "@apollo/client/utilities"
import { GraphQLClient } from 'graphql-request'

import { WebSocketLink } from '@apollo/client/link/ws';

const httpLink = createHttpLink({
  uri: "http://localhost:3030/graphql",
  credentials: 'same-origin'
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:3030/graphql',
  options: {
    reconnect: true
  }
});

const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
);

const cache = new InMemoryCache() 

export const appClient = new ApolloClient({
  link: splitLink,
  cache: cache
});

export const client = new GraphQLClient('http://localhost:3030/graphql');
