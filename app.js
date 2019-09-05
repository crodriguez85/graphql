const express = require('express');
const app= express();
const { ApolloServer, gql } = require('apollo-server-express');
const port = 3000
const users = require('./data').users;

const me = users[0];

const typeDefs = gql`
    type Query {
        users: [User]
        me: User
    }

    type User {
        id: ID!
        name: String!

    }
`;

const resolvers = {
    Query: {
        users: () => users,
        me: () => me
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(port, () => console.info(`Apollo GraphQL server on  localhost:${3000}/graphql`) );
