import UserData from './UserData';

export default interface AuthContextProps {
    authenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void;
    user: UserData | null;
    setUser: (user: UserData | null ) => void;
}

