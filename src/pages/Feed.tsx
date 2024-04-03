import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import PatternCard from '../components/PatternCard';
import PatternData  from '../interfaces/PatternData';
import Loading from '../components/Loading';

export default function Feed() {
    const [patterns, setPatterns] = useState<PatternData[]>([]);
    const [filter, setFilter] = useState('latest');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPatterns = async () => {
            try  {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/wips?filter=${filter}&page=${page}`);

                setPatterns(prevPatterns => {
                    const newPatterns = response.data.patterns.filter((p: PatternData) => !prevPatterns.some(prevP => prevP._id === p._id));
                    return [...prevPatterns, ...newPatterns];
                  });
                  console.log(response.data.patterns)
                  setLoading(false);
            } catch (error) {
                console.error("Error fetching patterns:", error);
                setLoading(false);
            }
        };
        fetchPatterns();
    }, [filter, page]);

    // Load More
    const loadMore = () => {
        return setPage(prevPage => prevPage + 1)
    }

    return (
        <>
        <header>
            <NavBar />
        </header>        
        <section className="flex flex-col justify-center items-center md:px-40 py-10 px-10 bg-white drop-shadow-md">
                <h1 className="altfont text-6xl text-accent1 md:mt-16 md:b-4 my-2">
                    Patterns & WIPs from the community
                </h1>
                <span className="text-primary1 text-3xl md:mt-2 mt-6 5 md:mb-8 mb-6">
                    Discover patterns and notes created by other users
                </span>
                <div className="flex items-center justify-center flex-wrap">
                <button 
                    type="button"
                    onClick={() => { setFilter('latest'); setPage(1); setPatterns([]); }}
                    className={`text-accent1 text-xl border-accent1 ${filter === 'latest' ? 'bg-accent1 text-white font-bold' : 'bg-white'} hover:bg-white hover:text-accent2 hover:border-accent2 border focus:border-accent1 focus:ring-2 focus:outline-none focus:ring-accent1 focus:scale-110 min-w-32 py-2 px-2 rounded-full text-center me-3 m-3 transition ease-in-out hover:scale-110 duration-300`}>
                        Latest
                </button>
                <button 
                    type="button"
                    onClick={() => { setFilter('likes'); setPage(1); setPatterns([]); }}
                    className={`text-accent1 text-xl border-accent1 ${filter === 'likes' ? 'bg-accent1 border-accent1 text-white font-bold' : 'bg-white'} hover:bg-white hover:text-accent2 hover:border-accent2 border focus:border-accent1 focus:ring-2 focus:outline-none focus:ring-accent1 focus:scale-110 min-w-32 py-2 px-2  rounded-full text-center me-3 m-3 transition ease-in-out hover:scale-110 duration-300`}>
                        Most Liked
                </button>
            </div> 
        </section> 
        <section id="feed" className="flex flex-col justify-center items-center bg-main1 md:px-40 md:py-20 px-10 py-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">                
                {patterns.map(pattern => 
                    <PatternCard key={pattern._id} pattern={pattern} />
                )}
            </div>
            <div className="my-8">
            {loading && <Loading />}           
                <Button 
                    type="button"
                    onClick={loadMore}
                    value="Load More"
                />            
            </div>
        </section>
        </>
    )
}