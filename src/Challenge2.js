import React, { useState } from 'react'

/*
 * Challenge 2: Fetch One User
 * 
 * When it's working correctly, when you click
 * the button and wait a second you should see:
 * 
 * Dionysus
 * 
 */

const fetchUserById = async (id) => {
    // TODO: Fetch one user
    // The endpoint for users is "http://localhost:3004/users"
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge2() {
    const [user, setUser] = useState({ name: "Nothing fetched"})

    const onFetchUserClick = async () => {
        const fetchedUser = await fetchUserById(2);
        setUser(fetchedUser);
    }

    return (
        <div>
            <button className="btn btn-primary mb-3" onClick={onFetchUserClick}>
                Fetch User
            </button>
            <div>
                { user.name }
            </div>
        </div>
    )
}
