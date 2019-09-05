const express = require('express');
const app= express();
const { ApolloServer, gql } = require('apollo-server-express');
const port = 3000

const typeDefs = gql`
    type Query {
        me: User
    }

    type User {
        name: String!
    }
`;

const resolvers = {
    Query: {
        me: () => {
            return {
                name: 'Cristian'
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(port, () => console.info(`Apollo GraphQL server on  localhost:${3000}/graphql`) );
