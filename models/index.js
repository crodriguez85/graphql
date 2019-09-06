const { sequelize } = require('./database');

const UserModel = sequelize.import('./user.js');
const CarModel = sequelize.import('./car.js');

const models = {
    User: UserModel,
    Car: CarModel
}

Object.keys(models).forEach(key => {
    if('associate' in models[key]) {
        models[key].associate(models);
    }
});

module.exports = models;