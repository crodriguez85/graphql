const express = require('express');
const app= express();
const { ApolloServer } = require('apollo-server-express');
const port = 3000
const cors = require('cors');

const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
// const me = models.users[0];

// const me = users[0];

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        models,
        // me

    }
});

server.applyMiddleware({ app });
app.use(cors());

app.listen(port, () => console.info(`Apollo GraphQL server on  localhost:${3000}/graphql`) );
