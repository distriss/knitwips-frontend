import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import SignUpData from '../interfaces/SignUpData'
import axios from 'axios';

export default function SignUpForm() {
  const form = useForm<SignUpData>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  
  const onSubmit = async (data: SignUpData) => {    
    try {
      await axios.post('http://localhost:5000/signup', data)
      console.log('Form submitted.', data)
    } catch (error) {
      console.error('Error submitting form:', error);
    }    
  }

  return (
    <div className="w-full max-w-xs ">
        <form
            onSubmit={handleSubmit(onSubmit)} 
            className="px-8">
            <div className="mb-1">
                <label
                   className="text-base text-pink font-bold text-shadow" 
                   htmlFor="username">Username:
                </label>
                <input                    
                    type="username"
                    id="username"
                    {...register("username", { 
                        required: {
                          value: true,
                          message: "Username is required",
                        }, 
                    })}
                    className="text-lg bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink"
                />
                <p className="text-white text-sm mt-1 italic">{errors.username?.message}</p>
            </div>
            <div className="mb-1">
                <label                   
                    htmlFor="email"
                    className="text-base text-pink font-bold text-shadow" 
                    >
                      Email:
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
                    className="text-lg bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink"
                />
                <p className="text-white text-sm mt-1 italic">{errors.email?.message}</p>

            </div>
            <div className="mb-4">
                <label                    
                    htmlFor="password"
                    className="text-base text-pink font-bold text-shadow"
                    >
                      Password:
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
                    className="text-lg bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink"
                />
                <p className="text-white text-sm mt-1 italic">{errors.password?.message}</p>

            </div>
            <div className="flex items-center justify-center my-4">                
                <button 
                    type="submit"
                    className="logo-font text-2xl py-2 px-8 rounded-full text-shadow bg-pink hover:bg-darkpink align-centertransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 whitespace-nowrap"
                    >
                        Sign Up
                </button>              
            </div>          
        </form>
        <DevTool control={control} />
    </div>
  );
}

