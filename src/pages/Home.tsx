import '../App.css'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner';

export default function HomePage() {
      // useEffect(() => {
      //   const userInfo = localStorage.getItem('userInfo');
    
      //   if (userInfo) {
      //     history.push(`/profile/${userInfo.username}`);
      //   }
      // }, [history]);

    return (
        <>
          <header className="header bg-sage">
            <NavBar />
            <Banner />
                               
          </header>
        </>
      )

}

