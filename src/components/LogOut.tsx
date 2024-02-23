import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import Cookies from 'universal-cookie';
import Button from './Button';
import { AuthContext } from '../context/AuthProvider';

const cookies = new Cookies();

export default function LogOut() {
    const authContext = useContext(AuthContext);
    const redirect = useNavigate();
    function handleLogOut() {
        localStorage.removeItem('userInfo');
        cookies.remove('TOKEN', { path: "/" });
        authContext.setAuthenticated(false);
        authContext.setUser(null);
        redirect("/")
    }

    return(
        <Button 
            type="button"
            onClick={handleLogOut}
            value="Log Out"/>
    )
}