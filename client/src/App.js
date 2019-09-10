import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import User from './components/User';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  
});

class App extends Component {
  render() { 
    return ( 
      <div>
        <ApolloProvider client={client}>
          <User/>
        </ApolloProvider>
      </div>
     );
  }
}
 
export default App;

