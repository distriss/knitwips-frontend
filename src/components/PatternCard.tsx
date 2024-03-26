import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
import { PatternDataProps } from '../interfaces/PatternData';
import LikeButton from '../components/LikeButton';
import SaveButton from './SaveButton';


export default function PatternCard({ pattern }: PatternDataProps) {
    const [dropdown, setDropdown] = useState(false);
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

    const toggleDropdown = () => {
      setDropdown(prev => !prev);
    };

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
                {dropdown && (
                    <div className="absolute right-0 top-10 mt-2 mr-2">
                        <div className="w-44 bg-white rounded-lg shadow divide-y divide-gray-100">
                            <ul className="py-2" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent2">View In Library</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 font-bold hover:text-accent2">Report</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent2">Edit</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-gray-700 text-sm 
                                    font-bold hover:text-accent2">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                <button
                    type="button"
                    id="dropdownButton"
                    onClick={toggleDropdown}
                    className="absolute right-0 top-0 mt-2 mr-2 shadow inline-block text-accent1 bg-white hover:text-accent2 focus:outline-none rounded-lg text-sm p-1.5 transition ease-in-out hover:scale-110 duration-300"
                >
                    <span className="sr-only">Open dropdown</span>
                    <svg className="w-6 h-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                    </svg>
                </button>
                <Link to={`/wips/${pattern._id}`}>
                    <img className="rounded-t-lg w-full object-cover h-72" src={pattern.image} alt="Pattern Image" />
                </Link> 
                <div className="p-5">
                    <div className="flex flex-row justify-between">              
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
                    <div className="flex flex-col items-start text-left justify-between mb-4">
                        <h5 className="text-2xl font-bold text-primary1">{pattern.title}</h5>
                        <span className="mb-2 text-sm">by 
                        <Link to={`/profile/${pattern.user.username}`} className="mb-2 text-sm font-semibold text-accent1d hover:text-accent2"> {pattern.user.username}</Link>
                        </span>
                        <p className="mb-3 font-normal text-primary3">{pattern.description}</p>
                    </div>                
                </div>
            </div>             
        </>
    )
}