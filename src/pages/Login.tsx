import NavBar from '../components/NavBar';
import LoginForm from '../components/LoginForm';

export default function LogIn() {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <section className="flex justify-center items-center bg-main2 px-40 py-10">
            <div className="max-w-sm w-full lg:max-w-5xl lg:flex">
                <div title="Hands holding a fluffy ball of yarn" 
                     className="form-img h-48 lg:h-auto lg:w-1/2 flex-none bg-cover rounded-t lg:rounded-tr-none lg:rounded-l text-center overflow-hidden" >
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

