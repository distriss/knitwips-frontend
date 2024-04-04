import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { PatternDataProps }  from '../interfaces/PatternData';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';

export default function FeaturedPatternCard({ pattern }: PatternDataProps) {
    const [likesCount, setLikesCount] = useState(pattern.likes);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { authUser } = useContext(AuthContext);
    
    // Liked Status
    useEffect(() => {
        if (authUser && authUser.likedPatterns) {
            const isPatternLiked = authUser.likedPatterns.includes(pattern._id);
            setIsLiked(isPatternLiked);
        }
    }, [pattern._id, authUser]);

    

    // Saved Status
    useEffect(() => {
        if (authUser && authUser.savedPatterns) {
            const isPatternSaved = authUser.savedPatterns.includes(pattern._id);
            setIsSaved(isPatternSaved);
        }
    }, [pattern._id, authUser]);

    const onLike = async (newLikesCount: number, likeStatus: boolean) => {
        setLikesCount(newLikesCount);
        setIsLiked(likeStatus);
    }
      
    const onSave = async (saveStatus: boolean) => {
        setIsSaved(saveStatus)
    }

    return (
        <>        
            <div className="relative max-w-sm bg-main1 rounded-lg m-1 shadow-md transition ease-in-out hover:scale-105 duration-200">            
                <Link to={authUser ? `/wips/${pattern.user.username}/patterns/${pattern._id}` : `/login`}>
                    <img className="rounded-t-lg w-full object-cover h-72" src={pattern.image} alt="Pattern Image" />
                </Link> 
                <div className="p-5">
                    <div className="flex flex-row justify-between justify-items-center">            
                        <LikeButton 
                            id={pattern._id}
                            likesCount={likesCount}
                            authUserLiked={isLiked}
                            onLike={onLike}
                        />
                        <SaveButton 
                            id={pattern._id}
                            authUserSaved={isSaved}
                            onSave={onSave}
                        />                       
                    </div>
                    <div className="flex flex-col text-left justify-between mb-4">
                        <h5 className="text-2xl font-bold text-primary1">{pattern.title}</h5>
                        <span className="mb-2 text-sm">by 
                        <Link to={authUser ? `/profile/${pattern.user.username}` : `/login`} className="mb-2 text-sm font-semibold text-accent1d hover:text-accent2"> {pattern.user.username}</Link>
                        </span>
                        <p className="mb-3 font-normal text-primary3">{pattern.description}</p>                                           
                                         
                    </div>
                    <div className="flex justify-center">
                        <span className="bg-red-100 text-accent1 font-bold text-md mt-2 mx-6 px-4 rounded-full">
                            {pattern.needleSize}
                        </span>
                        <span className="bg-red-100 text-accent1 font-bold text-md mt-2 mx-6 px-4 rounded-full">
                            {pattern.yarnWeight}
                        </span>
                    </div> 
                </div>               
            </div>          
        </>
    )
}