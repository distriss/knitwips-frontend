import logo from '../logo.svg'
import LoginForm from '../components/LoginForm'

export default function LogIn() {
    return (
        <>
          <header className="header bg-sage pt-10">
            <img src={logo} className="logo" alt="logo" />
            <h1 className="logo-font my-6 text-9xl whitespace-nowrap text-shadow">KnitWips</h1>
            <p className="altfont text-5xl text-pink mb-8 text-shadow">
              Create, Track & Share: The Ultimate Knitters Companion
            </p>
            <LoginForm />       
          </header>
        </>
      )

}

