import gql from 'graphql-tag';

export const ADD_USER = gql`
    mutation makeUser($name: String!){
        makeUser(name: $name) {
            id,
            name
        }
    }
`;