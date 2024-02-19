import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import SignUpData from '../interfaces/SignUpData'
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export default function SignUpForm() {
  const form = useForm<SignUpData>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;
  
  const onSubmit = async (data: SignUpData) => {    
    try {
      await axios.post('http://localhost:5000/signup', data)
      console.log('Form submitted.', data)
      
      const login = await axios.post('http://localhost:5000/login', {
        email: data.email,
        password: data.password,
      });
      console.log('Login successful', login.data)

      cookies.set("TOKEN", login.data.token, {
        path: "/"
      })
      window.location.href = "/feed";
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }    
  }

  return (
    <div className="w-full max-w-xs ">
        <form
            onSubmit={handleSubmit(onSubmit)} 
            className="px-8">
            <div className="mt-12">
                <label                   
                    htmlFor="username"
                    className="text-base text-primary1 font-bold" 
                    >Username:                   
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
                    className="text-lg bg-white appearance-none border-2 border-main2 rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-accent1"
                />
                <p className="text-accent2 text-sm mt-1 italic">{errors.username?.message}</p>
            </div>
            <div className="mt-4">
                <label                   
                    htmlFor="email"
                    className="text-base text-primary1 font-bold" 
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
            <div className="mt-4">
                <label                    
                    htmlFor="password"
                    className="text-base text-primary1 font-bold"
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
                    className="text-lg bg-white appearance-none border-2 border-main2 rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-accent1"
                />
                <p className="text-accent2 text-sm mt-1 italic">{errors.password?.message}</p>

            </div>
            <div className="flex items-center justify-center my-10">                
                <button 
                    type="submit"
                    className="altfont text-2xl  py-2 px-10 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap"
                    >Sign Up
                </button>              
            </div>          
        </form>
        <DevTool control={control} />
    </div>
  );
}

