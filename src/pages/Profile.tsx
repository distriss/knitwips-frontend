import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import NavBar from '../components/NavBar';
import UserCard from '../components/UserCard';
import UserData from '../interfaces/UserData';
import Loading from '../components/Loading';



export default function Profile() {
        const { username } = useParams();
        const [profileData, setProfileData] = useState<UserData | null>(null);
        const [loading, setLoading] = useState(false);

        useEffect(() => {
          const fetchUserData = async () => {
               try {
                    setLoading(true)
                    const response = await axios.get(`http://localhost:5000/users/profile/${username}`)
                    setProfileData(response.data.user)
                    setLoading(false)
               } catch (error) {
                    console.error('Error fetching user data:', error);
                    setLoading(false)
               }
          }
          fetchUserData();
        }, [username]);
      
    return (
       <>
       <header>
            <NavBar />
       </header>
       <main className="flex justify-center items-center bg-main2 px-40 py-10">
          {loading && <Loading />}   
              <div>
              {profileData && (
               <UserCard 
                    user={profileData}
                     />
               )}
               </div>           
       </main>
       <section className="mx-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-6 grid grid-cols-1 gap-4 bg-main2 min-h-screen">          
          <h3>User Gallery</h3>
       </section>
        
        
       </>
    )
}