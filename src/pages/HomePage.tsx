import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import '../App.css'
import NavBar from '../components/NavBar'

export default function HomePage() {

    return (
        <>
          <header className="header bg-sage">
            <NavBar />
            <img src={logo} className="logo mt-10" alt="logo" />
            <h1 className="logo-font my-6 text-9xl whitespace-nowrap text-shadow">KnitWips</h1>
            <p className="altfont text-5xl text-pink text-shadow mb-10">
              Create, Track & Share: The Ultimate Knitters Companion
            </p>
            <Link 
                to="/login"
                className="logo-font md:w-1/6 py-2 px-8 m-2 rounded-full bg-pink text-shadow hover:bg-darkpink align-centertransition ease-in-out hover:scale-105 duration-300 whitespace-nowrap"
                >
                  Log In
            </Link>
            <Link 
                to="/signup"
                className="logo-font md:w-1/6 py-2 px-8 m-2 rounded-full bg-pink hover:bg-darkpink text-shadow align-centertransition ease-in-out hover:scale-105 duration-300 whitespace-nowrap"
                >
                  Sign Up
            </Link>       
          </header>
        </>
      )

}

