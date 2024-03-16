import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import LikeButtonProps from '../interfaces/LikeButtonProps';
import axios from 'axios';

export default function LikeButton({ patternId }: LikeButtonProps) {
    const { authUser, setAuthUser } = useContext(AuthContext);
    const  [ isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const authUser = localStorage.getItem('userInfo');
        if (authUser) {
            const userInfo:  { likedPatterns: Array<{ _id: string }> } = JSON.parse(authUser);
            const likedPatternIds = userInfo.likedPatterns;
            const isLiked = likedPatternIds.includes(patternId);
            setIsLiked(isLiked)
        }
    }, [patternId])



    const handleLike = () => {
        // server request for handling like and unlike
    }

    return (
        <button onClick={handleLike}>
            {isLiked ? (
                <svg className="text-accent2 transition ease-in-out hover:scale-125 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            ) : (
                <svg className="text-accent1 transition ease-in-out hover:scale-125 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        )}
        </button>
    )
}