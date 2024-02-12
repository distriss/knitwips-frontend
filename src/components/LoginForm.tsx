import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoginData from '../interfaces/LoginData';

export default function LoginForm() {


  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // handle submission
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }


  return (
    <div className="w-full max-w-xs ">
        <form className="px-8" onSubmit={handleSubmit}>
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-lg bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink"
            />
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="text-lg bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink"
            />
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

