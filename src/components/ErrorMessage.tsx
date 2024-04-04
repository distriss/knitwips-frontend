import { useState, useEffect } from 'react';
import ErrorMessageProps from '../interfaces/ErrorMessageProps';

export default function ErrorMessage({ error}: ErrorMessageProps ) {
    const [showError, setShowError] = useState(!!error);

    useEffect(() => {
        setShowError(!!error);
    }, [error]);

    function closeError() {
        setShowError(false);
    }

    if (!showError || !error || error.trim().length === 0 ) {
        return null;
    }

    return (
        <div className="flex flex-row items-center p-4 mt-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
            <div>
              <span className="font-medium">Error!</span> {error}
            </div>
            <div>
                <button 
                    type="button" 
                    onClick={closeError}
                    className="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-800 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-800" data-dismiss-target="#alert-border-1" aria-label="Close">
                    <span className="sr-only">Dismiss</span>
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}