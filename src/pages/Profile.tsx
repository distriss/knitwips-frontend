import { useParams } from 'react-router-dom'
import NavBar from "../components/NavBar";


export default function Profile() {
        const { username } = useParams();
      
    return (
       <>
       <header>
            <NavBar />
       </header>
       <section className="flex justify-center items-center bg-main2 px-40 py-10">
            <p>this is Profile of {username} </p>
       </section>
        
        
       </>
    )
}