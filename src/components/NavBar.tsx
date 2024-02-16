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
            className="w-full flex flex-wrap items-center justify-between relative bg-main1 py-2 shadow-lg  dark:bg-neutral-600 lg:py-4">
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
                        className="text-4xl font-semibold text-primary1 logo-font text-shadow-sm">
                        KnitWips
                    </span>
                </a>
            </div>               
            <div 
                className="flex items-center justify-end px-4">
                <a 
                    href="/"
                    className="text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2 transition ease-in-out hover:scale-125 duration-300 whitespace-nowrap">
                        Home
                </a>
                <a 
                    href="/guest"
                    className="text-2xl px-4 mx-2  font-semibold text-primary1 hover:text-accent2 transition ease-in-out hover:scale-125 duration-300 whitespace-nowrap" >
                        Guest
                </a>
                <a 
                    href="/authtest"
                    className="text-2xl px-4 mx-2  font-semibold text-primary1 hover:text-accent2 transition ease-in-out hover:scale-125 duration-300 whitespace-nowrap" >
                        Auth
                </a>
                {
                    isLoggedIn ? (
                        <Link 
                        to="/login"
                        className="altfont text-2xl py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap"
                        >
                        Log In
                        </Link>
                        
                    ) : (
                        <Button 
                            type="button"
                            onClick={handleLogOut}
                            value="Log Out"/>
                    )
                }
                 
            </div> 
        </nav>
    )
}