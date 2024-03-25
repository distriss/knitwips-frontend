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
            className="w-full flex flex-wrap items-center justify-around relative bg-main1 text-primary1 shadow-lg  dark:bg-neutral-600 py-2 lg:py-8">
            <div className="flex items-center justify-start">
                <Link to="/" className="flex items-center">
                    <img src={logo} width="80" alt="KnitWips Logo" loading="lazy" className="inline mx-2 drop-shadow " />
                    <span className="text-4xl font-semibold text-primary1 logo-font">
                        KnitWips
                    </span>
                </Link>
            </div>               
            <ul className="flex items-center justify-end">
                <li className="transition ease-in-out hover:scale-110 duration-300">
                    <Link to="/guest" className={`text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2 ${currentPage === '/guest' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        Guest
                    </Link>
                </li>
                <li className="transition ease-in-out hover:scale-110 duration-300">
                    <Link to="/authtest" className={`text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2 ${currentPage === '/authtest' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        Auth
                    </Link>
                </li>
                <li className="transition ease-in-out hover:scale-110 duration-300">
                    <Link to="/about" className={`text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2 ${currentPage === '/about' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                        About
                    </Link>
                </li>
                { !authenticated ? (
                    <>
                        <li className="transition ease-in-out hover:scale-110 duration-300">
                            <Link to="/signup" className="altfont text-2xl min-w-36 py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2">
                                Sign Up
                            </Link>
                        </li>
                        <li className="transition ease-in-out hover:scale-110 duration-300">
                            <Link to="/login" className="altfont text-2xl min-w-36 py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2">
                                Log In
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="transition ease-in-out hover:scale-110 duration-300">
                            <Link to="/feed" className={`text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2 ${currentPage === '/feed' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                                Feed
                            </Link>
                        </li>
                        <li className="transition ease-in-out hover:scale-110 duration-300">
                            <Link to="/projects" className={`text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2 ${currentPage === '/projects' ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                                Projects
                            </Link>
                        </li>
                        {authUser && 
                            <li className="transition ease-in-out hover:scale-110 duration-300">
                                <Link to={`/profile/${authUser.username}`} className={`text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2 ${currentPage === `/profile/${authUser.username}` ? 'underline decoration-4 decoration-accent1 underline-offset-8' : ''}`}>
                                    Profile
                                </Link>
                            </li>}
                            <li className="altfont text-2xl min-w-36 py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 whitespace-nowrap transition ease-in-out hover:scale-110 duration-300">
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