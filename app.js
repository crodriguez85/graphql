const express = require('express');
const app= express();
const { ApolloServer, gql } = require('apollo-server-express');
const port = 3000
let users = require('./data').users;
let cars = require('./data').cars;

const me = users[0];

const typeDefs = gql`
    type Query {
        users: [User]
        user(id: Int!): User
        me: User

        cars: [Car]
        car(id: Int!): Car
    }

    type Mutation {
        makeUser(id: Int!, name: String!): User
        removeUser(id: Int!): Boolean
        createCar(id: Int!, make: String!, model: String!, color: String!): Car!
        removeCar(id: Int!): Boolean

    }

    type User {
        id: ID!
        name: String!
        car: [Car]
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
    },

    Mutation: {
        makeUser: (root, { id, name }) => {
            const user = {
                id, 
                name
            };
            users.push(user)
            return user
        },
        removeUser: (root, { id }) => {
            let found = false;
            users = users.filter(user => {
                if(user.id === id) {
                    found = true 
                } else {
                    return user;
                }
            });
            if (found) {
                return true;
            } else {
                return false;
            }
        },
        createCar: (root, { id, make, model, color }) => {
            const car = {
                id, 
                make,
                model,
                color
            };
            cars.push(car)
            return car;
        },
        removeCar: (root, { id }) => {
            let found = false;
            cars = cars.filter(car => {
                if(car.id === id) {
                    found = true 
                } else {
                    return user;
                }
            });
            if (found) {
                return true;
            } else {
                return false;
            }
        }

    },
    
    User: {
        car: root => {
            return root.cars.map(carId => cars[carId - 1])
        }
    }

};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app });

app.listen(port, () => console.info(`Apollo GraphQL server on  localhost:${3000}/graphql`) );
