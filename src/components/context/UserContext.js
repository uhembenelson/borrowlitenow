import React, { createContext, useState } from 'react';
export const  UserContext = createContext()

const UserContextProvider = (props)=> {
    const allusers = JSON.parse(localStorage.getItem('userdata'))
    const [user, setUser] = useState(allusers)
    console.log('this is another user')

    return(
    <UserContext.Provider value={{user}}>
        {props.children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;