import gql from 'graphql-tag';
import { defaultTypeResolver } from 'graphql';

const query = gql`{
    query{
        users {
            import { render } from 'react-dom'
            name,
            car {
                id,
                make,
                model,
                colour
            }
        }
    }
}
`;

export default query;