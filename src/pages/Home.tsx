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
          <section className="flex flex-col justify-center items-center bg-main1 py-6 ">
              <FeaturedPatterns />
          </section>
        </>
      )

}

