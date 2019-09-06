const Sequelize = require('sequelize');
require('dotenv').config();
// ('dbName', 'userName', 'pass')
const sequelize = new Sequelize('graphql', 'root', 'cra260385', {
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
        timestamps: false
    }
});

module.exports = {
    sequelize
};
