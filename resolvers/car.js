const resolvers = {
    Query: {
        cars: (root, args, { models }) => models.cars,
        car:(root, { id }, { models }) => {
            const car = models.cars.filter(car => car.id === id);
            return car[0];
        },
    },
    Mutation: {
        createCar: (root, { id, make, model, color }, { models }) => {
            const car = {
                id, 
                make,
                model,
                color
            };
            moodels.cars.push(car)
            return car;
        },
        removeCar: (root, { id }, {models}) => {
            let found = false;
            models.cars = models.cars.filter(car => {
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
    Car: {
        owner: (root, args, { models }) => models.users[root.ownedBy -1 ]
    }
};

module.exports = resolvers;