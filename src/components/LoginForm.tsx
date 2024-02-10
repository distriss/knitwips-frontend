import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="w-full max-w-xs ">
        <form className="px-4 py-2" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
                className="text-lg" 
                htmlFor="loginEmail">Email:</label>
            <input
                className="text-2xl bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink"
                type="email"
                id="loginEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
          </div>
          <div className="mb-4">
            <label 
                className="text-lg"
                htmlFor="loginPassword">Password:</label>
            <input
                className="text-2xl bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink"
                type="password"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <a className="align-baseline font-bold text-sm text-pink hover:text-darkgray" href="#">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button 
                type="submit"
                className='logo-font text-2xl py-2 px-8 rounded bg-pink hover:bg-darkpink align-centertransition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 whitespace-nowrap'>
                    Log In
            </button>            
          </div>
        </form>
    </div>
  );
};

export default LoginForm;
