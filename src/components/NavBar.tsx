import logo from '../logo.png';
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
            className="w-full flex flex-wrap items-center justify-around relative bg-main1 shadow-lg  dark:bg-neutral-600 py-2 lg:py-8">
            <div className="flex items-center justify-start">
                <a 
                    href="/"
                    className="flex items-center"                        
                    >
                    <img src={logo} 
                        width="80" 
                        alt="KnitWips Logo" 
                        loading="lazy" 
                        className="inline mx-2" 
                    />
                    <span 
                        className="text-4xl font-semibold text-primary1 logo-font">
                        KnitWips
                    </span>
                </a>
            </div>               
            <ul className="flex items-center justify-end">
                <li className="transition ease-in-out hover:scale-110 duration-300">              
                    <a 
                        href="/guest"
                        className="text-2xl px-4 mx-2  font-semibold text-primary1 hover:text-accent2 whitespace-nowrap" >
                            Guest
                    </a>
                </li>
                <li className="transition ease-in-out hover:scale-110 duration-300">
                    <a 
                        href="/authtest"
                        className="text-2xl px-4 mx-2  font-semibold text-primary1 hover:text-accent2 transition ease-in-out hover:scale-125 duration-300 whitespace-nowrap" >
                            Auth
                    </a>
                </li>
                <li className="transition ease-in-out hover:scale-110 duration-300">
                    <a 
                        href="/about"
                        className="text-2xl px-4 mx-2  font-semibold text-primary1 hover:text-accent2 transition ease-in-out hover:scale-125 duration-300 whitespace-nowrap" >
                            About
                    </a>
                </li>
                {
                    isLoggedIn ? (
                    <li>
                        <ul className="flex items-center justify-between">
                        <li className="transition ease-in-out hover:scale-110 duration-300">
                            <Link 
                                to="/signup"
                                className="altfont text-2xl min-w-36 py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center whitespace-nowrap"
                                >
                                    Sign Up
                            </Link>
                        </li>
                        <li className="transition ease-in-out hover:scale-110 duration-300">
                            <Link 
                                to="/login"
                                className="altfont text-2xl min-w-36 py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center whitespace-nowrap"
                                >
                                Log In
                            </Link>
                            </li>
                        </ul>
                    </li>
                    ) : (
                    <li>
                        <ul className="flex items-center justify-between">
                            <li className="transition ease-in-out hover:scale-110 duration-300">
                                <a 
                                    href="/feed"
                                    className="text-2xl px-4 mx-2  font-semibold text-primary1 hover:text-accent2 whitespace-nowrap" >
                                        Community
                                </a>
                            </li>
                            <li className="transition ease-in-out hover:scale-110 duration-300">
                                <a 
                                    href="/projects"
                                    className="text-2xl px-4 mx-2  font-semibold text-primary1 hover:text-accent2 whitespace-nowrap" >
                                        Projects
                                </a>
                            </li>
                            <li className="transition ease-in-out hover:scale-110 duration-300">
                                <a 
                                    href="/profile/:username"
                                    className="text-2xl px-4 mx-2  font-semibold text-primary1 hover:text-accent2 whitespace-nowrap" >
                                        Profile
                                </a>                            
                            </li>
                            <li>
                                <Button 
                                    type="button"
                                    onClick={handleLogOut}
                                    value="Log Out"/>
                            </li>
                        </ul>
                    </li>
                    )
                }
                 
            </ul> 
        </nav>
    )
}