import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import LikeButtonProps from '../interfaces/LikeButtonProps';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

export default function LikeButton({ id, likesCount, authUserLiked, onLike }: LikeButtonProps) {
    const { authUser, setAuthUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [effect, setEffect] = useState(false);
    
     const handleLike = async () => {
        const data = {
            authUserId: authUser?._id,
        }

        setEffect(true);
        setTimeout(() => {
          setEffect(false);
        }, 200);

        if (!authUserLiked) {
            try {
                setErrorMessage('');
                const response = await axios.put(`http://localhost:5000/wips/patterns/${id}/like`, data);
                console.log('Like');
                setAuthUser(response.data.authUser);
                localStorage.setItem('userInfo', JSON.stringify(response.data.authUser));
                onLike(response.data.newLikesCount, true);
                console.log(response.data);

            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("An unexpected error occurred.");
                }
                console.error("Error liking pattern:", error);
            }
        } else if (authUserLiked) {
            try {
                setErrorMessage('');
                const response = await axios.put(`http://localhost:5000/wips/patterns/${id}/like`, data);
                console.log('UnLike');
                setAuthUser(response.data.authUser);
                localStorage.setItem('userInfo', JSON.stringify(response.data.authUser));
                onLike(response.data.newLikesCount, false);
                console.log(response.data);
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("An unexpected error occurred.");
                } 
                console.error("Error Unliking pattern: ", error);
            }
        }
    }

    return (
        <>
        <div className="flex flex-col items-start justify-between mb-4 text-accent2">  
            {<ErrorMessage error={errorMessage} /> } 
            <button 
                onClick={handleLike} 
                key={id}
                className={`${effect && "animate-wiggle"}`}
                >            
                {authUserLiked? (
                    <svg className="text-accent2 transition ease-in-out hover:scale-125 duration-300" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="32" 
                        height="32">
                        <path 
                            fill="currentColor" 
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                ) : (
                    <svg className="text-accent1 transition ease-in-out hover:scale-125 duration-300" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        width="32" 
                        height="32">
                        <path 
                            fill="currentColor" 
                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                )}
            </button>
            <span className="text-primary1 mt-2">{likesCount} Likes</span>
        </div>
        </>
        
    )
}