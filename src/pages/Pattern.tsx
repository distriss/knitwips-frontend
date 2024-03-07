import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import PatternData from '../interfaces/PatternData';

export default function Pattern() {
    const { username, patternId } = useParams();
    const [ patternData, setPatternData] = useState<PatternData | null>(null);

    useEffect(() => {
        const fetchPatternData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/wips/${username}/patterns/${patternId}`)
                setPatternData(response.data)
            } catch (error) {
                console.error("Error fetching pattern data:", error);
            }
        }
        fetchPatternData();
    }, [username, patternId]);

return (
    <>
    <header>
        <NavBar />
    </header>
    <main className="mx-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-main2 min-h-screen">
            <div className="bg-white p-4 m-2 rounded-lg shadow">
                <h3 className='text-2xl m-2'>wip details</h3>
                { patternData && (
                <ul>
                     <li>Yarn Weight: {patternData.yarnWeight}</li>
                     <li>Needle Size: {patternData.needleSize}</li>
                     <li>stuff: and stuff</li>
                     <li>stuff: and stuff</li>
                     <li>stuff: and stuff</li>
                </ul>
                )}
            </div>
        <div className="md:col-span-2 space-y-4">
            {patternData && <h1>{patternData.title}</h1>}

            <div className="bg-white p-4 m-2 rounded-lg shadow">

            </div>
        </div>          
    </main>
  <section className="mx-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-6 grid grid-cols-1 gap-4 bg-main2 min-h-screen">
     
  <div  className="bg-white p-4 my-6 mx- rounded-lg shadow">
     <h3>comments</h3>
  </div>
  </section>
  </>
)
}