import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";

const AuthProvider = () => {

    const AuthContext = createContext()

    const auth = getAuth(app);

    return (
        <div>
            
        </div>
    );
};

export default AuthProvider;