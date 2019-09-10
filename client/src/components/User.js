import React from 'react'
import { Query } from 'react-apollo';
import {USERS_QUERY} from '../queries';
import AddUser from './AddUser';

const User = () => {
    return ( 
        <div>
            <AddUser/>
            <Query query={USERS_QUERY}>
                {({data, loading}) => {
                    if(loading) return <p>Loding...</p>
                    return (
                        <div>
                            <ul>
                                {data.users.map(user => (
                                    <li
                                        key={user.id}>
                                        {user.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                }}
            </Query>
        </div>
     );
}
 
export default User;