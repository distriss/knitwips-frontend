import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import LoginForm from '../components/LoginForm';

export default function LogIn() {
    return (
        <>
          <header className="header bg-sage">
            <NavBar />
            <Banner />
            <LoginForm />       
          </header>
        </>
      )

}

