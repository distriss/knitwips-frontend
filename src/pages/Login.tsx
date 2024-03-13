import logo from '../logo.png';
import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';

export default function LogIn() {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <section className="flex justify-center items-center bg-main2 px-40 py-10">
            <div className="max-w-sm w-full lg:max-w-7xl lg:flex">
                <div title="Hands holding a fluffy ball of yarn" 
                     className="login-img h-48 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-tr-none lg:rounded-l text-center overflow-hidden">
                    <div className="flex bg-transparent flex-col items-center text-shadow">
                        <h1 className="logo-font text-primary2 mt-10 text-8xl whitespace-nowrap">KnitWips</h1>
                        <p  className="altfont-2 text-4xl text-primary2 mt-8">CREATE, TRACK AND SHARE</p>
                        <img src={logo}
                           className="drop-shadow mt-6" 
                           width="250" 
                           alt="KnitWips Logo" 
                           loading="lazy" 
                           />
                        <p className="altfont-2 text-5xl text-primary2 mt-8 mb-8">The Ultimate Knitters Companion</p>
                    </div>
                </div>
                <div className="border-r border-b items-center border-l border-accent1 lg:border-l-0 lg:border-t lg:border-accent1 bg-main1 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                    <h1 className="altfont text-accent2 text-5xl my-8">
                        Ready to start your next 
                        <span className="italic">KnitWip</span>?
                    </h1>
                    <p>Lorem ipsum dolor sit, tenetur aliquam architecto rerum velit neque, quaerat ut ratione magni earum?</p>
                    <LoginForm />
                </div>
            </div>
        </section>
          
        </>
      )

}

