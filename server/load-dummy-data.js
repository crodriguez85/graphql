const { sequelize } = require('./models/database');
const models = require('./models');

const createData = async () => {
    await models.User.create({
        name: 'Cristian',
        cars: [{
            make: 'Mercedes',
            model: 'A250',
            color: 'black'
        }]
    }, {
        include: [models.Car]
    });
    
    await models.User.create({
        name: 'Michelle',
        cars: [{
            make: 'Mercedes',
            model: 'A250',
            color: 'white'
        }]
    }, {
        include: [models.Car]
    });

    await models.User.create({
        name: 'Francisco',
        cars: [{
            make: 'Mercedes',
            model: 'A250',
            color: 'red'
        }]
    }, {
        include: [models.Car]
    })
}

sequelize.sync({ force: true }).then(async () => {
    try {
        await createData();
        process.exit();
    } catch(error) {
        console.error(error)
    }
})