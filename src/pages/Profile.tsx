import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import NavBar from "../components/NavBar";
import UserCard from '../components/UserCard';


export default function Profile() {
        const { username } = useParams();
        const [profileData, setProfileData] = useState(null);

        useEffect(() => {
          const fetchUserData = async () => {
               try {
                    const response = await axios.get(`http://localhost:5000/users/profile/${username}`)
                    console.log(response.data.user)
                    setProfileData(response.data.user)
               } catch (error) {
                    console.error('Error fetching user data:', error);
               }
          }
          fetchUserData();
        }, [username]);

      
    return (
       <>
       <header>
            <NavBar />
       </header>
       <main className="mx-w-7xl mx-auto p-4 sm:p-6 lg:p-8 mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-main2 min-h-screen">
            <div>
            {profileData && <UserCard user={profileData} />}

            </div>
            <div className="md:col-span-2 space-y-4">

            </div>
            
       </main>
       <section id="gallery">

       </section>
        
        
       </>
    )
}