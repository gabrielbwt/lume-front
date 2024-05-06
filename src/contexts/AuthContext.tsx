"use client"
import { createContext, useState } from 'react';

interface AuthContextDataProps {
    isLogin: boolean;
    setIsLogin: (isLogin: boolean) => void;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export const AuthProvider = ({ children }:any) => {

    const [isLogin, setIsLogin] = useState<boolean>(false);

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                setIsLogin,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
