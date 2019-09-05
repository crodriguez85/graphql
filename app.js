const express = require('express');
const app= express();
const { ApolloServer, gql } = require('apollo-server-express');
const port = 3000
const users = require('./data').users;
const cars = require('./data').cars;

const me = users[0];

const typeDefs = gql`
    type Query {
        users: [User]
        user(id: Int!): User
        me: User

        cars: [Car]
        car(id: Int!): Car
    }

    type User {
        id: ID!
        name: String!
    }

    type Car {
        id: ID!
        make: String!
        model: String!
        color: String!
        owner: User!
    }
`;

const resolvers = {
    Query: {
        users: () => users,
        // Query with Parameters id
        user:(root, { id }) => {
            const user = users.filter(user => user.id === id);
            return user[0];
        },
        cars: () => cars,
        car:(root, { id }) => {
            const car = cars.filter(car => car.id === id);
            return car[0];
        },
        me: () => me,
    },
    Car: {
        owner: root => users[root.ownedBy - 1]
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(port, () => console.info(`Apollo GraphQL server on  localhost:${3000}/graphql`) );
