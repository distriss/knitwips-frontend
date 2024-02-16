import logo from '../logo.svg'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Banner() {

    return (
        <section id="banner" className="flex justify-center items-center text-center bg-main1">
            <div className="flex flex-col items-center">
                <img src={logo} className="logo mt-10" width="250" alt="logo" />
                <h1 className="logo-font text-primary1 my-6 text-8xl whitespace-nowrap text-shadow">KnitWips</h1>
                <p  className="altfont text-3xl text-primary1 mt-4 mb-8 text-shadow">Create, Track & Share - The Ultimate Knitters Companion</p>
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