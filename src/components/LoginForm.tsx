import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import LoginData from '../interfaces/LoginData';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import { AuthContext } from '../context/AuthProvider';

const cookies = new Cookies();

export default function LoginForm() {
  const form = useForm<LoginData>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginData) => {
     try {
      setErrorMessage('')
      setLoading(true);
      const response = await axios.post('http://localhost:5000/users/login', data)
      console.log('Form submitted')
      console.log('Login successful');
      cookies.set("TOKEN", response.data.token, {
        path: "/",
      })      
      localStorage.setItem('userInfo', JSON.stringify(response.data.user))
      authContext.setAuthenticated(true);
      authContext.setUser(response.data.user);
      setErrorMessage('');
      navigate("/feed")
      setLoading(false);
     } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('An unexpected error occurred.')
        }
      console.error('Error submitting form:', error);
      setLoading(false);
     }
  }

  return (    
    <div className="w-full max-w-xs ">      
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="px-8"
            >
              {errors && <ErrorMessage error={errorMessage} /> } 
              { loading && <Loading />}                
          <div className="mt-12">
            <label                
                htmlFor="email"
                className="text-base text-primary1 font-bold my-2" 
                >Email:
            </label>
            <input                
                type="email"
                id="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                  },    
                })}
                className="text-lg bg-white appearance-none border-2 border-main2 rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-accent1"
            />
            <p className="text-accent2 text-sm mt-1 italic">{errors.email?.message}</p>
          </div>
          <div className="mt-6">
              <label                 
                  htmlFor="password"
                  className="text-base text-primary1 font-bold"
                  >Password:
              </label>
              <input              
                  type="password"
                  id="password"
                  {...register("password", { 
                    required: {
                      value: true,
                      message: "A Password is required",
                    }, 
                  })}
                  className="text-lg bg-white appearance-none border-2 border-main2 rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-accent1"
              />
              <p className="text-accent2 text-sm mt-1 italic">{errors.password?.message}</p>
              <a className="align-baseline font-bold text-sm italic text-primary1 hover:text-accent2" 
                 href="#"
                 >Forgot Password?
              </a>
          </div>
          <div className="flex items-center justify-center my-10">          
            <button 
                type="submit"
                className="altfont text-2xl py-2 px-10 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap"
                >                  
                  Log In
            </button>            
          </div>
        </form>
    </div>
  );
}

