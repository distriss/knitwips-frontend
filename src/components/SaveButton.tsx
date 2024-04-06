import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import SaveButtonProps from '../interfaces/SaveButtonProps';
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
import { Link } from 'react-router-dom';

export default function SaveButton({ id, authUserSaved, onSave }: SaveButtonProps) {
    const { authUser, setAuthUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('');
    const [effect, setEffect] = useState(false);

    const handleSave = async () => {
        const data = {
            authUserId: authUser?._id,
        }

        setEffect(true);
        setTimeout(() => {
          setEffect(false);
        }, 200);

        if (!authUserSaved) {
            try {
                setErrorMessage('');
                const response = await axios.put(`http://localhost:5000/wips/patterns/${id}/save`, data);
                console.log("Saved to Library");
                setAuthUser(response.data.authUser);
                localStorage.setItem('userInfo', JSON.stringify(response.data.authUser));
                onSave(true);
                console.log(response.data);

            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage("An unexpected error occurred.");
                }
                console.error("Error saving pattern to library: ", error);
            }
        } else if (authUserSaved) {
            try {
                setErrorMessage('');
                const response = await axios.put(`http://localhost:5000/wips/patterns/${id}/save`, data);
                console.log("Removed from Library")
                setAuthUser(response.data.authUser);
                localStorage.setItem('userInfo', JSON.stringify(response.data.authUser));
                onSave(true);
                console.log(response.data);
            } catch (error) {
                if (axios.isAxiosError(error) && error.response) {
                    setErrorMessage(error.response.data.message);
                } else {
                  setErrorMessage("An unexpected error occurred.");
                }
                console.error("Error removing pattern from library: ", error);
            }
        }
    }

    return (
        <> 
        { authUser ? ( 
          <div className="text-accent2">      
              <button 
                onClick={handleSave} 
                key={id}
                className={`${effect && "animate-wiggle"}`}
              >            
                {authUserSaved? (
                    <svg className="text-accent2 transition ease-in-out hover:scale-125 hover:text-accent1 duration-300" 
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="34"
                      height="34"
                    >
                      <path
                        fill="currentColor"
                        d="M5 3h14a2 2 0 0 1 2 2v14l-7-3-7 3V5a2 2 0 0 1 2-2z"
                      />
                  </svg>
                ) : (
                    <svg className="text-accent1 transition ease-in-out hover:scale-125 hover:text-accent2 duration-300" 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="34"
                    height="34"
                    >
                      <path
                        fill="currentColor"
                        d="M5 3h14a2 2 0 0 1 2 2v14l-7-3-7 3V5a2 2 0 0 1 2-2z"
                      />
                  </svg>              
                )}
            </button>  
            {errorMessage && <ErrorMessage error={errorMessage} /> }     
          </div>
        ) : (
          <>
          <Link to="/login">
              <button>
                  <svg className="text-accent1 transition ease-in-out hover:scale-125 hover:text-accent2 duration-300" 
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="34"
                        height="34"
                        >
                        <path
                          fill="currentColor"
                          d="M5 3h14a2 2 0 0 1 2 2v14l-7-3-7 3V5a2 2 0 0 1 2-2z"
                        />
                  </svg>
              </button> 
              {errorMessage && <ErrorMessage error={errorMessage} /> }         
          </Link>
          
          </>    
        )}
        </>
    )
}