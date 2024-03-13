import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from "../components/NavBar";
import PatternCard from "../components/PatternCard";
import PatternData  from "../interfaces/PatternData";

export default function Feed() {
    const [patterns, setPatterns] = useState<PatternData[]>([]);
    const [filter, setFilter] = useState('latest');
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchPatterns = async () => {
            try  {
                const response = await axios.get(`http://localhost:5000/wips?filter=${filter}&page=${page}`);

                setPatterns(prevPatterns => {
                    const newPatterns = response.data.patterns.filter((p: PatternData) => !prevPatterns.some(prevP => prevP._id === p._id));
                    return [...prevPatterns, ...newPatterns];
                  });
                  console.log(response.data.patterns)
            } catch (error) {
                console.error("Error fetching patterns:", error);
            }
        };
        fetchPatterns();
    }, [filter, page]);

    return (
        <>
        <header>
            <NavBar />
        </header>        
        <section className="flex flex-col justify-center items-center bg-main2 px-40 py-10">
            <h1>This is Feed - Community</h1>
            <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button 
                    type="button"
                    onClick={() => { setFilter('latest'); setPage(1); setPatterns([]); }}
                    className={`text-accent1 text-xl border-accent1 ${filter === 'latest' ? 'bg-accent1 text-white font-bold' : 'bg-white'} hover:bg-white hover:text-accent2 hover:border-accent2 border focus:border-accent1 focus:ring-4 focus:outline-none focus:ring-accent1 focus:scale-110 rounded-full px-5 py-2.5 text-center me-3 m-3 transition ease-in-out hover:scale-110 duration-300`}>
                        Latest
                </button>
                <button 
                    type="button"
                    onClick={() => { setFilter('likes'); setPage(1); setPatterns([]); }}
                    className={`text-accent1 text-xl border-accent1 ${filter === 'likes' ? 'bg-accent1 border-accent1 text-white font-bold' : 'bg-white'} hover:bg-white hover:text-accent2 hover:border-accent2 border focus:border-accent1 focus:ring-4 focus:outline-none focus:ring-accent1 focus:scale-110 rounded-full px-5 py-2.5 text-center me-3 m-3 transition ease-in-out hover:scale-110 duration-300`}>
                        Most Liked
                </button>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {patterns.map(pattern => 
                    <PatternCard key={pattern._id} pattern={pattern} />
                )}
            </div>
            <div>
                
                <button onClick={() => setPage(prevPage => prevPage + 1)}>Load More</button>            
            </div>

        </section>
        </>
    )
}