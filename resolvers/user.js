const resolvers = {
    Query: {
        users: (root, args, { models }) => {
            return models.User.findAll();
        },
        // Query with Parameters id
        user:(root, { id }, {models}) => {
            models.User.findByPk(id);
        },
        // me: (parent, args, {me}) => me,
    },
    Mutation: {
        makeUser: (root, { name }, {models}) => {
            const user = {
                name
            };
           models.User.create(user);
        },
        removeUser: (root, { id }, {models}) => {
            return models.User.destroy({
                where: {
                    id
                }
            });
        },
    },
    User: {
        car: (root, args, { models }) => {
            return models.Car.findAll({
                where: {
                    userId: parent.id
                }
            })
        }
    }
};

module.exports = resolvers;