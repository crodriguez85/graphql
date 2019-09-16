const resolvers = {
    Query: {
        cars: (root, args, { models }) => {
            return models.Car.findAll();
        },
        car:(root, { id }, { models }) => {
            return models.Car.findByPk(id);
        },
    },
    Mutation: {
        createCar: (root, { make, model, color }, { models, me }) => {
            if(!me) {
                throw new Error('Not Authenticated')
            }

            const car = {
                make,
                model,
                color,
                userId: me.id
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