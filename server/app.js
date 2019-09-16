require('dotenv').config();
const express = require('express');
const app= express();
const { ApolloServer } = require('apollo-server-express');
const port = 8000
const cors = require('cors');

const models = require('./models');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const jwt = require('jsonwebtoken');

const getLoggedInUser = req => {
    const token = req.headers['x-auth-token'];
    if (token) {
        try{
            return jwt.verify(token, process.env.JWT_SECRET)
        } catch (error){
            throw new Error('Session Expired');
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({
        models,
        secret: process.env.JWT_SECRET,
        me: getLoggedInUser(req)

    })
});

server.applyMiddleware({ app });
app.use(cors());

app.listen(port, () => console.info(`Apollo GraphQL server on  localhost:${port}/graphql`) );
