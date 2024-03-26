import { useEffect, useState } from 'react';
import axios from 'axios';
import FeaturedPatternCard from './FeaturedPatternCard';
import PatternData from '../interfaces/PatternData';
import Loading from './Loading';

export default function FeaturedPatterns() {
    const [patterns, setPatterns] = useState<PatternData[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPatterns = async() => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:5000/wips/featured`)
                setPatterns(response.data.patterns)
                setLoading(false);

                } catch (error) {
                    console.error("Error fetching featured patterns:", error);
                    setLoading(false);
                }
            };
            fetchPatterns();
    }, []);

    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && <Loading />} 
            {patterns.map(pattern => 
                <FeaturedPatternCard key={pattern._id} pattern={pattern} />
            )}
        </div>
        </>
    )


}