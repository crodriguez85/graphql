const resolvers = {
    Query: {
        cars: () => cars,
        car:(root, { id }) => {
            const car = cars.filter(car => car.id === id);
            return car[0];
        },
    },
    Car: {
        owner: root => users[root.ownedBy - 1]
    },

    Mutation: {
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
    Car: {
        owner: root => users[root.ownedBy -1 ]
    }
};

module.exports = resolvers;