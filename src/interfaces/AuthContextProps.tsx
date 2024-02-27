import UserData from './UserData';

export default interface AuthContextProps {
    authenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void;
    authUser: UserData | null;
    setAuthUser: (authUser: UserData | null ) => void;
}

