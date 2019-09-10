const resolvers = {
    Query: {
        cars: (root, args, { models }) => {
            models.Car.findAll();
        },
        car:(root, { id }, { models }) => {
            models.Car.findByPk(id);
        },
    },
    Mutation: {
        createCar: (root, { make, model, color }, { models }) => {
            const car = {
                make,
                model,
                color
            };
            return models.Car.create(car);
        },
        removeCar: (root, { id }, {models}) => {
           return models.Car.destroy({
               where :{
                   id
               }
           });
        }
    },
    Car: {
        owner: (root, args, { models }) => {
            return models.User.findByPk(root.userId);
        }
    }
};

module.exports = resolvers;