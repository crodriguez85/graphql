const express = require('express');
const app= express();
const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    }

    type User {
        name: String!
    }
`;

const resolvers = gql`
    Query: {
        me: () => {
            return {
                name: 'Cristian'
            }
        }
    }
`;

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(3000, () => console.info('Apollo GraphQL server on port 3000') );
