import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider, useQuery, useSubscription } from "react-apollo-hooks";

import { appClient, client as graphqlclient } from "./client";
import { HOGE_LIST, SUBSCRIPTION } from "./hoge";

const HogeList = () => {
  const { data, error, loading } = useQuery(HOGE_LIST, {
    fetchPolicy: 'network-only'
  });

  if (loading) {
    return <div>Loading...</div>;
  };

  if (error) {
    return `Error! ${error.message}`;
  };

  return (
    <ul>{data.hoge.map(hoge => (<li key={hoge.id}>{hoge.id}</li>))}</ul>
  );
};

const HogeSubscription = () => {
  const { data, error, loading } = useSubscription(SUBSCRIPTION, {
    fetchPolicy: 'network-only',
    onSubscriptionData: async () => {
      const result = await graphqlclient.request(HOGE_LIST);
      console.table(result.hoge);
    }
  })

  if (loading) {
    return <div>Loading...</div>;
  };

  if (error) {
    return `Error! ${error.message}`;
  };

  return (
    <div>
      {data.onHoge.id}
    </div>
  )
}

export const App = () => (
  <ApolloProvider client={appClient}>
    <ApolloHooksProvider client={appClient}>
      <HogeSubscription />
      <HogeList />
    </ApolloHooksProvider>
  </ApolloProvider>
)