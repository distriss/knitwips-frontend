import logo from '../logo.png';
import '../App.css';
import { useContext } from 'react';
import { Link  } from 'react-router-dom'
import LogOut from './LogOut';
import { AuthContext } from '../context/AuthProvider';


export default function NavBar() {
    const { authenticated, user} = useContext(AuthContext);

    return (
        <nav 
            className="w-full flex flex-wrap items-center justify-around relative bg-main1 shadow-lg  dark:bg-neutral-600 py-2 lg:py-8">
            <div className="flex items-center justify-start">
                <Link to="/" className="flex items-center">
                    <img src={logo} width="80" alt="KnitWips Logo" loading="lazy" className="inline mx-2 logo" />
                    <span className="text-4xl font-semibold text-primary1 logo-font">KnitWips</span>
                </Link>
            </div>               
            <ul className="flex items-center justify-end">
                <li><Link to="/guest" className="text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2">Guest</Link></li>
                <li><Link to="/authtest" className="text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2">Auth</Link></li>
                <li><Link to="/about" className="text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2">About</Link></li>
                { !authenticated ? (
                    <>
                        <li><Link to="/signup" className="altfont text-2xl min-w-36 py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2">Sign Up</Link></li>
                        <li><Link to="/login" className="altfont text-2xl min-w-36 py-2 px-8 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2">Log In</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/feed" className="text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2">Community</Link></li>
                        <li><Link to="/projects" className="text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2">Projects</Link></li>
                        {user && <li><Link to={`/profile/${user.username}`} className="text-2xl px-4 mx-2 font-semibold text-primary1 hover:text-accent2">Profile</Link></li>}
                        <li><LogOut /></li>
                    </>
                )}
            </ul>
        </nav>
    )
}