import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider';
import axios from 'axios';
import Button from './Button'
import { UserDataProps } from '../interfaces/UserData';
import ErrorMessage from './ErrorMessage';



export default function UserCard({ user }: UserDataProps ) {
    const { username } = useParams();
    const { authUser, setAuthUser } = useContext(AuthContext);    
    const [errorMessage, setErrorMessage] = useState('')
    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {        
        const authUser = localStorage.getItem('userInfo');
        if (authUser) {
            const userInfo:  { following: Array<{ _id: string }> } = JSON.parse(authUser);
            const userIds = userInfo.following.map((user) => user._id || user);
            const following = userIds.includes(user._id);
            setIsFollowing(following);
        }
    }, [user._id])

    
    const handleFollow = async () => {        
        const data = {
            authUserId: authUser?._id,
            userId: user._id
        }
        if (!isFollowing) {
            try {
                setErrorMessage('')
                const response = await axios.put(`http://localhost:5000/users/${username}/follow`, data )
                console.log('Follow')
                setAuthUser(response.data.authUser);
                localStorage.setItem('userInfo', JSON.stringify(response.data.authUser));
                setIsFollowing(true)
                console.log(user)
                console.log(response.data.user)
                
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
    

    const handleUnfollow = async () => {
        const data = {
            authUserId: authUser?._id,
            userId: user._id
        }
        if (isFollowing) {
            try {
                setErrorMessage('')
                const response = await axios.put(`http://localhost:5000/users/${username}/unfollow`, data )
                console.log('UnFollow')
                setAuthUser(response.data.authUser);
                localStorage.setItem('userInfo', JSON.stringify(response.data.authUser));
                setIsFollowing(false)                
                
                console.log(response.data.user)
                console.log(user)
                
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    setErrorMessage(error.response.data.message);
                  } else {
                    setErrorMessage('An unexpected error occurred.')
                  }
                console.error('Error unfollowing user:', error)
            }
        }
    }

    return (
        <section className="bg-white p-4 m-2 rounded-lg shadow">
            <h2 className="text-2xl m-2">Profile of {user.username}</h2>
            <p className="mx-4 my-6">about paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cumque consectetur.</p>
            {<ErrorMessage error={errorMessage} /> } 
            { authUser?._id !== user._id && (
            <Button 
                type="button"
                onClick={isFollowing ? handleUnfollow : handleFollow}
                value={isFollowing ? "Unfollow" : "Follow" } />
            )}  
        </section>
    )
}