const Sequelize = require('sequelize');
require('dotenv').config();
// ('dbName', 'userName', 'pass')
const sequelize = new Sequelize('graphql', process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
};
