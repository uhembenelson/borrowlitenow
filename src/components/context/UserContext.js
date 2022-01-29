import React, { createContext, useState, useEffect } from 'react';
export const  UserContext = createContext()

const UserContextProvider = (props)=> {
    const allusers = JSON.parse(localStorage.getItem('userdata'))
    const [user, setUser] = useState(allusers)
    const [authenticated, setAuthenticated] = useState()
    
    // if(user.email){
    //     setAuthenticated(true)
    // }
    const checkuser = ()=> {
        if(user == null){
            setAuthenticated(false)
        }else{
            setAuthenticated(true)  
        }
    }
    
    useEffect(()=>{
        checkuser()
    })
   



    return(
    <UserContext.Provider value={{user, authenticated}}>
        {props.children}
    </UserContext.Provider>
    )
}

export default UserContextProvider;