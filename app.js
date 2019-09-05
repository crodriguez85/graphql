const express = require('express');
const app= express();
const { ApolloServer } = require('apollo-server-express');
const port = 3000

const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// const me = users[0];

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(port, () => console.info(`Apollo GraphQL server on  localhost:${3000}/graphql`) );
