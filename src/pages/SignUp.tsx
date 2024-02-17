import NavBar from '../components/NavBar';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
    return (
        <>
          <header className="header bg-sage">
            <NavBar />
            <h1 className="logo-font my-6 text-9xl whitespace-nowrap text-shadow">KnitWips</h1>
            <p className="altfont text-5xl text-pink mb-8 text-shadow">
              Create, Track & Share: The Ultimate Knitters Companion
            </p>
            <div>
              <SignUpForm />
            </div>        
          </header>
        </>
      )

}

