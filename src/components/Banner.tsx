import logo from '../logo.png'
import '../App.css'
// import { Link } from 'react-router-dom'

export default function Banner() {

    return (
        <section id="banner" className="flex justify-center items-center bg-main2  px-40 py-10">
            <div className="flex flex-col items-center">
                <img src={logo}
                     className="drop-shadow logo mt-6" 
                     width="250" 
                     alt="KnitWips Logo" 
                     loading="lazy" 
                     />
                <h1 className="logo-font text-primary1 mt-10 text-8xl whitespace-nowrap">KnitWips</h1>
                <p  className="altfont-2 text-4xl text-primary1 mt-8">CREATE, TRACK AND SHARE</p>
                <p className="altfont-2 text-5xl text-primary1 mt-8 mb-8">The Ultimate Knitters Companion</p>
            </div>
        </section>
    )
}