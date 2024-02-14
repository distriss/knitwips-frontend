import logo from '../logo.svg';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Button from './Button';

const cookies = new Cookies();

export default function NavBar() {
    const redirect = useNavigate();
    const isLoggedIn = !cookies.get('TOKEN');

    function handleLogOut() {
        cookies.remove('TOKEN', { path: "/" });
        redirect("/")
    }

    return (
        <nav 
            className="w-full flex flex-wrap items-center justify-between relative bg-white py-2 text-pink shadow-lg hover:text-darkpink focus:text-sage dark:bg-neutral-600 lg:py-4">
            <div className="flex items-center justify-start px-4">
                <a 
                    href="/"
                    className="flex items-center"                        
                    >
                    <img src={logo} 
                        width="60" 
                        alt="KnitWips Logo" 
                        loading="lazy" 
                        className="inline mx-2" 
                    />
                    <span 
                        className="text-4xl font-semibold text-pink logo-font text-shadow-sm">
                        KnitWips
                    </span>
                </a>
            </div>               
            <div 
                className="flex items-center justify-end px-4">
                <a 
                    href="/"
                    className="text-2xl px-4 mx-2 font-semibold text-pink logo-font hover:text-darkpink text-shadow-sm">
                        Home
                </a>
                <a 
                    href="/guest"
                    className="text-2xl px-4 mx-2  font-semibold text-pink hover:text-darkpink logo-font text-shadow-sm" >
                        Guest
                </a>
                <a 
                    href="/authtest"
                    className="text-2xl px-4 mx-2  font-semibold text-pink hover:text-darkpink logo-font text-shadow-sm" >
                        Auth
                </a>
                {
                    isLoggedIn ? (
                        <Link 
                        to="/login"
                        className="logo-font text-2xl py-2 px-4 mx-2 rounded-full bg-pink text-white text-shadow-sm hover:bg-darkpink align-center transition ease-in-out hover:scale-105 duration-300 whitespace-nowrap"
                        >
                        Log In
                        </Link>
                        
                    ) : (
                        <Button 
                            type="button"
                            onClick={handleLogOut}
                            value="Log Out"/>
                        // <Link 
                        // to="/logout"
                        // className="logo-font text-2xl py-2 px-4 mx-2 rounded-full bg-pink text-white text-shadow-sm hover:bg-darkpink align-center transition ease-in-out hover:scale-105 duration-300 whitespace-nowrap"
                        // >
                        //     Log Out
                        // </Link> 
                    )
                }
                 
            </div> 
        </nav>
    )
}