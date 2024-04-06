import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthProvider';
import NavBar from '../components/NavBar';
import PatternData from '../interfaces/PatternData';
import Loading from '../components/Loading';
import LikeButton from '../components/LikeButton';
import NumOfLikes from '../components/NumOfLikes';
import SaveButton from '../components/SaveButton';

export default function Pattern() {
    const { username, patternId } = useParams();
    const [pattern, setPattern] = useState<PatternData | null>(null);
    const [loading, setLoading] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { authUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchPattern = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/wips/${username}/patterns/${patternId}`)
                setPattern(response.data);
                setLoading(false);
                setLikesCount(response.data.likes)
            } catch (error) {
                console.error("Error fetching pattern data:", error);
                setLoading(false);
            }
        }
        fetchPattern();
    }, [username, patternId]);

     // Liked Status
     useEffect(() => {
        if (pattern && authUser && authUser.likedPatterns) {
            const isPatternLiked = authUser.likedPatterns.includes(pattern._id);
            setIsLiked(isPatternLiked);
        }
    }, [pattern, authUser]);

    
    // Saved Status
    useEffect(() => {
        if (pattern && authUser && authUser.savedPatterns) {
            const isPatternSaved = authUser.savedPatterns.includes(pattern._id);
            setIsSaved(isPatternSaved);
        }
    }, [pattern, authUser]);

    const onLike = async (newLikesCount: number, likeStatus: boolean) => {
        setLikesCount(newLikesCount);
        setIsLiked(likeStatus);
    }
      
    const onSave = async (saveStatus: boolean) => {
        setIsSaved(saveStatus)
    }


return (
    <>
    <header>
        <NavBar />         
    </header>
    <div>
        {loading && <Loading />}
        { pattern && (
        <div className="fixed z-30 top-1/4 right-0">
            <div className="flex justify-center bg-main3 items-center pt-2 pr-4 w-[85px] md:w-[110px] h-[70px] my-2 rounded-l-full drop-shadow-md transition ease-in-out hover:translate-x-4 duration-300 overflow-x-hidden">
                <LikeButton 
                    id={pattern._id}
                    likesCount={likesCount}
                    authUserLiked={isLiked}
                    onLike={onLike}
                />
            </div>
            <div className="flex justify-center bg-main3 items-center pt-2 pr-4 w-[85px] md:w-[110px] h-[70px] my-2 rounded-l-full drop-shadow-md transition ease-in-out hover:translate-x-4 duration-300 overflow-x-hidden">      
                    <SaveButton 
                        id={pattern._id}
                        authUserSaved={isSaved}
                        onSave={onSave}
                    />
            </div>
        </div>
        )}                
    { pattern && (
    <section className="flex flex-col justify-center items-center md:px-40 py-10 px-10 bg-white drop-shadow-md"> 
        <h2 className="altfont text-5xl md:text-6xl text-accent1d md:mt-16 md:mb-4 my-2">{pattern.title}</h2>        
        <span className="text-primary1 text-lg md:text-2xl md:my-2 my-1">by <Link to={`/profile/${pattern.user.username}`} className="font-semibold text-accent1d hover:text-accent2">{pattern.user.username}</Link></span>       
        <p className="text-lg md:text-xl md:mt-4 mt-2 md:mb-6 mb-2">{pattern.description}</p>
        <NumOfLikes likesCount={likesCount} />
    </section>
    )}  
    <section className="mx-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-6 grid grid-cols-1 md:grid-cols-5 gap-4 bg-main2">
        <div className="bg-white p-4 m-2 rounded-lg shadow min-h-80">
            <h3 className='text-2xl m-2'>wip details</h3>
            { pattern && (
            <ul>
                 <li>Yarn Weight: {pattern.yarnWeight}</li>
                 <li>Needle Size: {pattern.needleSize}</li>
            </ul>
            )}
        </div>
        <div className="md:col-span-3 space-y-4 ">            
                
            <div className="bg-white p-4 rounded-lg shadow min-h-80">
            {pattern && <h1>{pattern.title}</h1>}
            <p>{pattern?.description}</p>
                
            </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
            <span>Tools</span>
        </div>  
        <section className="md:col-start-2 md:col-span-3 bg-white p-4 my-6 rounded-lg shadow min-h-80">
            <h3>comments section</h3>
            <div>comment form</div>
        </section>      
    </section>
    </div>   
  
  </>
)
}