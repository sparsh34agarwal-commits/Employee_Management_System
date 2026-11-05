import React, { createContext, useEffect, useState } from 'react'
import { getlocalstorage } from '../utils/LocalStorage';

export const authcontext=createContext();


const AuthProvider = ({children}) => {
    
    const [Userdata, setUserdata] = useState(null);
    useEffect(() => {
        setUserdata(getlocalstorage());
    }, [])

  return (
    <div>
        <authcontext.Provider value={Userdata}>
            {children}
        </authcontext.Provider>
    </div>
  )
}

export default AuthProvider