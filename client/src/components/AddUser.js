import React, {useState} from 'react';
import { Mutation } from 'react-apollo';
import {ADD_USER} from '../mutations';

const AddUser = () => {

    const [ name, setName ] = useState('');

    return ( 
        <Mutation mutation={ADD_USER}>
        {( makeUser, {loading, error }) => (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    makeUser({
                        variables: {
                            name
                        }
                    });
                }}>
                <label>
                    <span>Name</span>
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button
                    type="submit"
                >
                    Add
                </button>
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
            </form>
            )}
        </Mutation>
    
     );
}
 
export default AddUser;