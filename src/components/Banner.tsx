import logo from '../logo.png'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Banner() {

    return (
        <section id="banner" className="flex justify-center items-center text-center bg-main2">
            <div className="flex flex-col items-center">
                <h1 className="logo-font text-primary1 mt-10 text-9xl whitespace-nowrap">KnitWips</h1>
                <p  className="altfont-2 text-5xl text-primary1 mt-8">CREATE, TRACK AND SHARE</p>
                <img src={logo} className="logo mt-6" width="250" alt="logo" />
                
                
                <p className="altfont-2 text-6xl text-primary1 mt-6 mb-8">The Ultimate Knitters Companion</p>
                <Link 
                to="/login"
                className="altfont text-2xl md:w-1/5 py-2 px-4 mx-2 mb-5 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap"
                >
                  Log In
                </Link>
                <Link 
                    to="/signup"
                    className="altfont text-2xl md:w-1/5 py-2 px-4 mx-2 mb-10 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap"
                    >
                      Sign Up
                </Link>
            </div>
        </section>
    )
}