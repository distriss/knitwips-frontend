import defaultImg from '../assets/wip-default.png';
import { PatternDataProps } from '../interfaces/PatternData';
import Button from '../components/Button'


export default function PatternCard({ pattern }: PatternDataProps) {
    
    return (
        <>
            <div className="h-auto max-w-full bg-main1 border border-main2 rounded-lg shadow-md">
            <a href="#">
              <img className="rounded-t-lg w-2/3 max-w-full m-auto drop-shadow" src={defaultImg} alt="Pattern Image" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold text-primary1">{pattern.title}</h5>
              </a>
              <p className="mb-3 font-normal text-primary3">{pattern.description}</p>
              <div className="flex items-center mb-4">                
                <span className="ml-2 text-primary1">{pattern.likes}</span>
              </div>              
              <Button 
                  type="button"
                  onClick="#"
                  value="View"/>
            </div>
        </div>
        
        </>
    )
}