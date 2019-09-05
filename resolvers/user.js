const resolvers = {
    Query: {
        users: () => users,
        // Query with Parameters id
        user:(root, { id }) => {
            const user = users.filter(user => user.id === id);
            return user[0];
        },
        me: () => me,
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
    },
    User: {
        car: root => {
            return root.cars.map(carId => cars[carId - 1])
        }
    }
};

module.exports = resolvers;