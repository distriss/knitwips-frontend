import '../App.css'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner';
import FeaturedPatterns from '../components/FeaturedPatterns'

export default function HomePage() {
    return (
        <>
          <header className="header bg-sage">
            <NavBar />
            <Banner />                               
          </header>
          <div className="flex flex-col justify-center items-center py-8 bg-white drop-shadow-lg">
          <span className="text-primary1 text-3xl my-4">
                  Join 1000s of knitters on their creation journey!
              </span>
              <h2 className="altfont text-7xl text-accent1d mb-8">Discover Trending Projects:</h2>
              
            </div>
          <section id="featured" className="flex flex-col justify-center items-center bg-main1 py-32 ">            
              <FeaturedPatterns />
          </section>
        </>
      )

}

