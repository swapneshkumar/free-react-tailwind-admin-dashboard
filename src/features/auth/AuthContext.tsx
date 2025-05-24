import React, { createContext, useContext, useState, ReactNode } from 'react';
import AuthContextType from '../../models/AuthContextType';
import { AuthResponse } from '../../models/AuthResponse';
import { json } from 'stream/consumers';



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<string | null>(() => localStorage.getItem('user'));
    const [token, setToken] = useState(localStorage.getItem('token'));

    const login = (loginRespo: AuthResponse) => {
        setUser(loginRespo.displayName);
        localStorage.setItem('user', loginRespo.username);
        localStorage.setItem('authResponse', JSON.stringify(loginRespo));
    };

    const getResponse = (): AuthResponse => {
        return JSON.parse(localStorage.getItem('authResponse') || '{}') as AuthResponse;
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    return (
        <AuthContext.Provider value={{ token, user, getResponse, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
