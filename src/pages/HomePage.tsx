import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import '../App.css'

const HomePage = () => {

    return (
        <>
          <header className="header bg-sage">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="logo-font my-10 text-9xl whitespace-nowrap">KnitWips</h1>
            <p className="altfont logo-altfont text-pink whitespace-nowrap">
              Create, Track & Share: The Ultimate Knitters Companion
            </p>
            <Link 
                to="/login"
                className="logo-font w-1/6 py-2 px-8 m-2 rounded-full bg-pink hover:bg-darkpink align-centertransition ease-in-out hover:scale-105 duration-300 whitespace-nowrap"
                >
                  Log In
            </Link>
            <Link 
                to="/signup"
                className="logo-font w-1/6 py-2 px-8 m-2 rounded-full bg-pink hover:bg-darkpink align-centertransition ease-in-out hover:scale-105 duration-300 whitespace-nowrap"
                >
                  Sign Up
            </Link>       
          </header>
        </>
      )

};

export default HomePage;
