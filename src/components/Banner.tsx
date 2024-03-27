import logo from '../logo.png'
import '../App.css'
// import { Link } from 'react-router-dom'

export default function Banner() {

    return (
        <section id="banner" className="flex justify-center items-center bg-main2 md:px-40 md:py-20 px-20 py-10">
            <div className="flex flex-col items-center">
                <img src={logo}
                     className="drop-shadow logo mt-6" 
                     width="250" 
                     alt="KnitWips Logo" 
                     loading="lazy" 
                     />
                <h1 className="logo-font text-primary1 mt-10 md:text-8xl text-7xl whitespace-nowrap">KnitWips</h1>
                <p  className="altfont-2 md:text-4xl text-3xl text-primary1 md:mt-10 mt-8">CREATE, TRACK AND SHARE</p>
                <p className="altfont-2 md:text-5xl text-4xl text-primary1 md:mt-8 mt-2 md:mb-8 mb-2">The Ultimate Knitters Companion</p>
            </div>
        </section>
    )
}