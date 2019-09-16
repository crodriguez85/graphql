const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
    const { id, name, username } = user;
    return jwt.sign({ id, name, username}, secret, {expiresIn})
}

const resolvers = {
    Query: {
        users: (root, args, { models }) => {
            return models.User.findAll();
        },
        // Query with Parameters id
        user:(root, { id }, {models}) => {
            return models.User.findByPk(id);
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
        register: async (root, { name, username, password }, { models }) => {
            const user = {
                name, 
                username,
                password
            };
           const registeredUser =  await models.User.create(user);
           try {
               if(typeof registeredUser.id === 'number'){
                   return true
               } else {
                   return false
               }
           } catch (error) {
               console.error(error)
           }
        },
        login: async (root, { username, password}, { models, secret }) => {
            const user = await models.User.findOne({ where: {username}});
            if(!user) {
                throw new Error('User Not Find');
            }
            const validPassword = await user.validatePassword(password);
            if(!validPassword) {
                throw new Error('Password Incorrect');
            }
            return {
                token: createToken(user, secret, '30m')
            }
        } 
        
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