import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
import Button from './Button'
import { UserDataProps } from '../interfaces/UserData';
import ErrorMessage from './ErrorMessage';



export default function UserCard({ user, onUpdate }: UserDataProps ) {
    const { username } = useParams();
    const { authUser, setAuthUser } = useContext(AuthContext);    
    const [errorMessage, setErrorMessage] = useState('')
    const [ isFollowing, setIsFollowing] = useState(authUser?.following?.includes(user._id) || false);

    
    const handleFollow = async () => {
        console.log(user, authUser)
        const data = {
            authUserId: authUser?._id,
            userId: user._id
        }
        if (isFollowing) {

            console.log('Unfollow')
            setIsFollowing(false);

        } else {
            try {
                setErrorMessage('')
                const response = await axios.put(`http://localhost:5000/users/${username}/follow`, data )
                console.log('Follow')
                onUpdate(response.data.targetUser)
                setAuthUser(response.data.authUser)
                setIsFollowing(true)
                
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    setErrorMessage(error.response.data.message);
                  } else {
                    setErrorMessage('An unexpected error occurred.')
                  }
                console.error('Error following user:', error)
            }
            
        }
    }

    return (
        <section className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl">Profile of {user.username}</h2>
            <p>about paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque consectetur.</p>
            {<ErrorMessage error={errorMessage} /> }  
            <Button 
                type="button"
                onClick={handleFollow}
                value={isFollowing ? "Unfollow" : "Follow" } />
                    
        </section>
    )
}