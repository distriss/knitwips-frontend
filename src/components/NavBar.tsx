import logo from '../logo.png';
import '../App.css';
import { useContext } from 'react';
import { Link, useLocation  } from 'react-router-dom'
import LogOut from './LogOut';
import { AuthContext } from '../context/AuthProvider';


export default function NavBar() {
    const { authenticated, authUser } = useContext(AuthContext);
    const location = useLocation();
    const currentPage = location.pathname;

    return (
        <nav 
            className="max-w-full flex flex-wrap items-center justify-between relative bg-white text-primary1 shadow-sm dark:bg-neutral-600 py-2 lg:py-3 ">
            <div className="ml-32 flex items-center">
                <Link to="/" className="flex items-center">
                    <img src={logo} width="70" alt="KnitWips Logo" loading="lazy" className="inline mx-2 drop-shadow " />
                    <span className="text-4xl font-semibold text-primary1 logo-font">
                        KnitWips
                    </span>
                </Link>
            </div>  
            <div className="flex-grow">
            <ul className="ml-16 flex items-center">
                <li className="transition ease-in-out hover:scale-125 duration-300">
                    <Link to="/guest" className={`text-lg px-4 mx-2 font-semibold text-primary1 hover:text-accent2 ${currentPage === '/guest' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        Guest
                    </Link>
                </li>
                <li className="transition ease-in-out hover:scale-125 duration-300">
                    <Link to="/authtest" className={`text-lg px-4 mx-2 font-semibold text-primary1 hover:text-accent2 ${currentPage === '/authtest' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        Auth
                    </Link>
                </li>
                <li className="transition ease-in-out hover:scale-125 duration-300">
                    <Link to="/about" className={`text-lg px-4 mx-2 font-semibold text-primary1 hover:text-accent2 text-nowrap ${currentPage === '/about' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        About Us
                    </Link>
                </li>
            { !authenticated ? (
                    <>                
                    </>
                ) : (
                    <>
                    <li className="transition ease-in-out hover:scale-125 duration-300">
                        <Link to="/feed" className={`text-lg px-4 mx-2 font-semibold text-primary1 hover:text-accent2 text-nowrap ${currentPage === '/feed' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        Feed
                        </Link>
                    </li>
                    <li className="transition ease-in-out hover:scale-125 duration-300">
                        <Link to="/projects" className={`text-lg px-4 mx-2 font-semibold text-primary1 hover:text-accent2 text-nowrap ${currentPage === '/projects' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        Projects
                        </Link>
                    </li>
                {authUser && 
                    <li className="transition ease-in-out hover:scale-125 duration-300">
                        <Link to={`/profile/${authUser.username}`} className={`text-lg px-4 mx-2 font-semibold text-primary1 hover:text-accent2 text-nowrap ${currentPage === `/profile/${authUser.username}` ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                            Profile
                        </Link>
                    </li>
                    }
                    </> 
                )}
            </ul>
            
            </div>
            <ul className="mr-32 flex flex-col md:flex-row items-center">
                { !authenticated ? (
                    <>
                        <li className="altfont text-lg text-nowrap min-w-32 py-2 px-2 mx-2 my-1 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap">
                            <Link to="/signup">
                                Sign Up
                            </Link>
                        </li>
                        <li className="altfont text-lg text-nowrap min-w-32 py-2 px-2 mx-2 my-1 rounded-full bg-accent1 text-whiteytext-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap">
                            <Link to="/login">
                                Log In
                            </Link>
                        </li>
                    </>
                ) : (
                    <>                        
                        <li className="altfont text-lg text-nowrap min-w-32 py-2 px-2 mx-2 my-1 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap">
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
        </nav>
    )
}