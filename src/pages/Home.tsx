import '../App.css'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner';
import FeaturedPatterns from '../components/FeaturedPatterns'

export default function HomePage() {
    return (
        <>
          <header className="header bg-sage drop-shadow-lg">
            <NavBar />
            <Banner />                               
          </header>
          <div className="flex flex-col justify-center items-center md:px-40 py-10 px-10 bg-white drop-shadow-md">          
              <h2 className="altfont text-7xl text-accent1d md:my-4 my-2">Discover Trending Projects</h2> 
              <span className="text-primary1 text-3xl md:mt-2 mt-6 5 md:mb-8 mb-6">
                  Join 1000s of knitters on their creation journey!
              </span>             
            </div>
          <section id="featured" className="flex flex-col justify-center items-center bg-main1 md:px-40 md:py-20 px-10 py-10 ">            
              <FeaturedPatterns />
          </section>
        </>
      )

}

