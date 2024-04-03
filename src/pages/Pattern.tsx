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
    <main className="mx-w-7xl mx-auto p-4 sm:p-6 lg:p-8 pt-6 grid grid-cols-1 md:grid-cols-5 gap-4 bg-main2">
        <div className="bg-white p-4 m-2 rounded-lg shadow min-h-80">
            <h3 className='text-2xl m-2'>wip details</h3>
            { patternData && (
            <ul>
                 <li>Yarn Weight: {patternData.yarnWeight}</li>
                 <li>Needle Size: {patternData.needleSize}</li>
                 <li>stuff: and stuff</li>
                 <li>stuff: and stuff</li>
            </ul>
            )}
        </div>
        <div className="md:col-span-3 space-y-4 ">            
                
            <div className="bg-white p-4 m-2 rounded-lg shadow min-h-80">
            {patternData && <h1>{patternData.title}</h1>}
            <p>{patternData?.description}</p>
                
            </div>
        </div>
        <div className="bg-white p-4 m-2 rounded-lg shadow">
            <span>User Info</span>
        </div>         
    </main>
  <section  className="grid grid-cols-1 md:grid-cols-5 gap-4 mx-w-7xl mx-auto pt-6 p-4 sm:p-6 lg:p-8 bg-main2">     
  <div  className="md:col-start-2 md:col-span-3 bg-white p-4 my-6 rounded-lg shadow min-h-80">
     <h3>comments</h3>
  </div>
  </section>
  </>
)
}