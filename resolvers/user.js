const resolvers = {
    Query: {
        users: (root, args, { models }) => models.users,
        // Query with Parameters id
        user:(root, { id }, {models}) => {
            const user = models.users.filter(user => user.id === id);
            return user[0];
        },
        me: (parent, args, {me}) => me,
    },
    Mutation: {
        makeUser: (root, { id, name }, {models}) => {
            const user = {
                id, 
                name
            };
            models.users.push(user)
            return user
        },
        removeUser: (root, { id }, {models}) => {
            let found = false;
            models.users = models.users.filter(user => {
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