import logo from '../logo.png';
import '../App.css';
import { useState, useContext } from 'react';
import { Link, useLocation  } from 'react-router-dom'
import LogOut from './LogOut';
import { AuthContext } from '../context/AuthProvider';


export default function NavBar() {
    const { authenticated, authUser } = useContext(AuthContext);
    const location = useLocation();
    const currentPage = location.pathname;
    const [navOpen, setNavOpen] = useState(false);

    

    return (
        <nav 
            className="bg-white text-primary1 drop-shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} width="70" alt="KnitWips Logo" loading="lazy" className="inline min:mx-1 drop-shadow " />
                    <span className="text-4xl font-semibold text-primary1 logo-font">
                        KnitWips
                    </span>
                </Link>
                <button 
                    onClick={() => setNavOpen(!navOpen)}
                    data-collapse-toggle="navMenu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-accent1d rounded-lg lg:hidden text-accent1 hover:text-accent2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navMenu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>  
            <div className={`w-full lg:block lg:w-auto ${navOpen ? 'block' : 'hidden'}`} id="navMenu">
            <ul className="flex flex-col items-center font-medium mt-4 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
                <li className="transition ease-in-out hover:scale-125 duration-300">
                    <Link to="/guest" className={`block py-2 px-3 lg:p-0 rounded lg:bg-transparent text-lg text-nowrap font-semibold text-primary1 hover:text-accent2 ${currentPage === '/guest' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        Guest
                    </Link>
                </li>
                <li className="transition ease-in-out hover:scale-125 duration-300">
                    <Link to="/authtest" className={`block py-2 px-3 lg:p-0 rounded lg:bg-transparent text-lg text-nowrap font-semibold text-primary1 hover:text-accent2 ${currentPage === '/authtest' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        Auth
                    </Link>
                </li>
                <li className="transition ease-in-out hover:scale-125 duration-300">
                    <Link to="/about" className={`block py-2 px-3 lg:p-0 rounded lg:bg-transparent text-lg text-nowrap font-semibold text-primary1 hover:text-accent2 ${currentPage === '/about' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        About Us
                    </Link>
                </li>                
            { !authenticated ? (
                    <>                
                    </>
                ) : (
                    <>
                    <li className="transition ease-in-out hover:scale-125 duration-300">
                        <Link to="/feed" className={`block py-2 px-3 lg:p-0 rounded lg:bg-transparent text-lg text-nowrap font-semibold text-primary1 hover:text-accent2 ${currentPage === '/feed' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                            Feed
                        </Link>
                    </li>
                    <li className="transition ease-in-out hover:scale-125 duration-300">
                        <Link to="/projects" className={`block py-2 px-3 lg:p-0 rounded lg:bg-transparent text-lg text-nowrap font-semibold text-primary1 hover:text-accent2 ${currentPage === '/projects' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                            Projects
                        </Link>
                    </li>
                {authUser && 
                    <li className="transition ease-in-out hover:scale-125 duration-300">
                        <Link to={`/profile/${authUser.username}`} className={`block py-2 px-3 lg:p-0 rounded lg:bg-transparent text-lg text-nowrap font-semibold text-primary1 hover:text-accent2 ${currentPage === `/profile/${authUser.username}` ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                            Profile
                        </Link>
                    </li>
                    }
                    </> 
                )}
                <li>
                    <ul className="flex flex-col xl:flex-row items-center">
                { !authenticated ? (
                    <>
                        <li className="altfont text-xl text-nowrap min-w-32 py-2 px-2 mx-2 my-1 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap">
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li className="altfont text-xl text-nowrap min-w-32 py-2 px-2 mx-2 my-1 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap">
                            <Link to="/login">
                                Log In
                            </Link>
                        </li>
                    </>
                ) : (
                    <>                        
                        <li className="altfont text-xl text-nowrap min-w-32 py-2 px-2 mx-2 my-1 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap">
                            <Link to="/newPattern" >
                                New WIP
                            </Link>
                        </li>
                        <li>
                            <LogOut />
                        </li>
                    </>
                    )}
                    </ul>
                </li>
                </ul>
                </div>            
            </div>
        </nav>
    )
}