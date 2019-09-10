import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

client = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
});

function App() {
  return (
    <div className="App">
      Hola
    </div>
  );
}

export default App;
