import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase.js';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    console.log("all contenct")
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;