import React, { useState } from 'react';
import { PatternDataProps } from '../interfaces/PatternData';
import Button from '../components/Button'


export default function PatternCard({ pattern }: PatternDataProps) {
    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => {
      setDropdown(prev => !prev);
    };
    
    return (
        <>
         <div className="relative max-w-sm bg-main1 rounded-lg shadow-md">
            {dropdown && (
                <div className="absolute right-0 top-10 mt-2 mr-2">
                    <div className="w-44 bg-white rounded-lg shadow divide-y divide-gray-100">
                        <ul className="py-2" aria-labelledby="dropdownButton">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-accent2">Add to Favorites</a>
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
            <a href="#">
                <img className="rounded-t-lg" src={pattern.image} alt="Pattern Image" />
            </a>
            <div className="p-5">
                <div className="flex items-center justify-between mb-4 text-accent2">                
                    <span className="ml-2 text-primary1">{pattern.likes} Likes</span>
                    <svg className="transition ease-in-out hover:scale-125 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                </div>
                <div className="flex flex-col items-center justify-between mb-4">  
                    <h5 className="mb-2 text-2xl font-bold text-primary1">{pattern.title}</h5>
                    <p className="mb-3 font-normal text-primary3">{pattern.description}</p>
                </div>                             
                <Button 
                    type="button"
                    onClick="#"
                    value="View"
                />
            </div>
        </div>       
        </>
    )
}