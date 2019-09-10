import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import User from './components/User';

client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <User/>
      </ApolloProvider>
    </div>
  );
}

export default App;
