import { useForm } from 'react-hook-form';
import LoginData from '../interfaces/LoginData';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function LoginForm() {
  const form = useForm<LoginData>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: LoginData) => {
     try {
      const response = await axios.post('http://localhost:5000/login', data)
      console.log('Form submitted', data)
      console.log('Login successful', response.data);
      cookies.set("TOKEN", response.data.token, {
        path: "/",
      })
      window.location.href = "/authtest";
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
          <div className="mb-2">
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
            <a className="align-baseline font-bold text-sm text-darkgray hover:text-pink" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-center my-4">
            <button 
                type="submit"
                className="logo-font text-2xl py-2 px-8 rounded-full text-shadow bg-pink hover:bg-darkpink align-centertransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 whitespace-nowrap">
                    Log In
            </button>            
          </div>
        </form>
    </div>
  );
}

