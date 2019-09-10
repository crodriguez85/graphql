const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });

    User.associate = models => {
        //  One to many one user many cars
        User.hasMany(models.Car, { onDelete: 'CASCADE'})
    }

    return User;
}

module.exports = user;