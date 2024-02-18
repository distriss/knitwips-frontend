import logo from '../logo.png'
import NavBar from '../components/NavBar';
import SignUpForm from '../components/SignUpForm';

export default function SignUp() {
    return (
        <>
          <header>
            <NavBar />
          </header>
          <section className="flex justify-center items-center bg-main2 px-40 py-10">
            <div className="max-w-sm w-full lg:max-w-7xl lg:flex">
                <div className="bg-accent1 h-48 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-tr-none lg:rounded-l text-center overflow-hidden" >
                <div className="flex flex-col items-center">
                
                <h1 className="logo-font text-primary2 mt-10 text-8xl whitespace-nowrap">KnitWips</h1>
                <p  className="altfont-2 text-4xl text-primary2 mt-8">CREATE, TRACK AND SHARE</p>
                <img src={logo}
                     className="logo mt-6" 
                     width="250" 
                     alt="KnitWips Logo" 
                     loading="lazy" 
                     />
                <p className="altfont-2 text-5xl text-primary2 mt-8 mb-8">The Ultimate Knitters Companion</p>
            </div>

                </div>
                <div className="border-r border-b items-center border-l border-accent1 lg:border-l-0 lg:border-t lg:border-accent1 bg-main1 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
                    <h1 className="altfont text-accent2 text-5xl my-8">
                      Join 100s of knitters on their creation journey!
                    </h1>
                    <SignUpForm />
                </div>
            </div>
          </section>
        </>
      )

}

