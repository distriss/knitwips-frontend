import { createContext, ReactNode, useState, useEffect } from 'react';
import AuthContextProps from '../interfaces/AuthContextProps';
import UserData from '../interfaces/UserData';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const defaultAuthValues: AuthContextProps = {
    authenticated: false,
    setAuthenticated: () => {},
    authUser: null,
    setAuthUser: () => {},
};

export const AuthContext = createContext<AuthContextProps>(defaultAuthValues);

interface AuthProviderProps {
    children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
    const [authenticated, setAuthenticated] = useState(false);
    const [authUser, setAuthUser] = useState<UserData | null>(null);

    useEffect(() => {
        const validateToken = async () => {
            const storedToken = cookies.get('TOKEN')
            const storedUser = localStorage.getItem('userInfo');
            if (storedToken) {
                try {
                    await axios.get('http://localhost:5000/token/validate', {
                        headers: { Authorization: `Bearer ${storedToken}` }
                    });
                    if (storedUser) {
                        const user: UserData = JSON.parse(storedUser);
                        setAuthUser(user);
                        setAuthenticated(true);
                    }
                } catch (error) {
                    cookies.remove('TOKEN');
                    localStorage.removeItem('userInfo');
                    setAuthenticated(false);
                    setAuthUser(null);
                }
            } else {
                localStorage.removeItem('userInfo');
                setAuthenticated(false);
                setAuthUser(null);
            }
        };
        validateToken();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                setAuthenticated,
                authUser,
                setAuthUser,
            }}
            >
            {children}
        </AuthContext.Provider>
    )
}