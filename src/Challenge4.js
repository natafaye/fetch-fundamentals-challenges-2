import React, { useState } from 'react'

/*
 * Challenge 4: Update a User
 * 
 * You'll need to get the Fetch User button
 * working before you can test updating.
 * 
 * When it's all working correctly, when you click
 * the update button and WAIT a few seconds that user
 * should now have the name "Maria"
 * 
 * To reset the database open the fake-backend folder
 * and replace the contents of the db.json file
 * with the contents of the BACKUP.json file.
 * Then you'll need to stop (Ctrl + C) the backend
 * and start it again (npm run backend)
 * 
 * If you change users and don't reset the database
 * it may effect the results of other challenges
 * 
 */

const fetchUserById = async (id) => {
    // TODO: Fetch one user by id
    // (You can copy this from Challenge 2)
}

const updateUser = async (id, newData) => {
    // TODO: Update the user with the given id and the given new data
    // The endpoint for users is "http://localhost:3004/users"
}

/**** DON'T CHANGE ANYTHING BELOW ****/

export default function Challenge4() {
    const [user, setUser] = useState({ name: "Not fetched" })

    const refetchUser = async () => {
        const fetchedUser = await fetchUserById(1);
        setUser(fetchedUser);
    }

    const onSetUserNameToMariaClick = async () => {
        await updateUser(1, { name: "Maria" })
        refetchUser();
    }

    const onSetUserNameToBobClick = async () => {
        await updateUser(1, { name: "Bob" })
        refetchUser();
    }

    return (
        <div>
            <button className="btn btn-primary mb-2 me-2" onClick={refetchUser}>
                Fetch User
            </button>
            <button className="btn btn-primary mb-2 me-2" onClick={onSetUserNameToMariaClick}>
                Set User Name to Maria
            </button>
            <button className="btn btn-primary mb-2" onClick={onSetUserNameToBobClick}>
                Set User Name to Bob
            </button>
            <div>
                <p>{ user.name }</p>
            </div>
        </div>
    )
}
