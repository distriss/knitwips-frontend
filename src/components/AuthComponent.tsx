import { useContext } from 'react';
import NavBar from "./NavBar";
import { AuthContext } from '../context/AuthProvider'

export default function Auth() {
    const { authenticated, authUser } = useContext(AuthContext);

    return (
        <div>
            <NavBar />
            <h1 className="text-center">Auth Test Page</h1>
            <div>
              <p>Authenticated: {authenticated ? 'Yes' : 'No'}</p>
              <p>Username: {authUser?.username || 'No user logged in'}</p>
            </div>
        </div>
    )
}