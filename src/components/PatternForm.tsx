import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom'
import PatternData from '../interfaces/PatternData';
import axios from 'axios';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import { AuthContext } from '../context/AuthProvider';

export default function LoginForm() {
  const form = useForm<PatternData>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const authContext = useContext(AuthContext);
  // const navigate = useNavigate();


  const onSubmit = async (data: PatternData) => {
    const user = authContext.authUser;    

    if (!user) {
      console.error("No User Data available");
      setErrorMessage("User not authenticated");
      return
    } else {

      const patternData = {
        ...data, 
        user
      }  
      setErrorMessage('')
      try {
        setLoading(true)
        const response = await axios.post('http://localhost:5000/wips/newpattern', patternData)
        console.log('Form submitted')
        console.log('New Pattern Successfully Created', response.data);
        // navigate(`/wips/${response.data._id}`)
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('An unexpected error occured.')
        }
        console.error('Error submitting form:', error);
        setLoading(false);
      }
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
                htmlFor="title"
                className="text-base text-primary1 font-bold my-2" 
                >Title:
            </label>
            <input                
                type="text"
                id="title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "A title is required",
                  },   
                })}
                className="text-lg bg-white appearance-none border-2 border-main2 rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-accent1"
            />
            <p className="text-accent2 text-sm mt-1 italic">{errors.title?.message}</p>
          </div>
          <div className="mt-6">
              <label                 
                  htmlFor="description"
                  className="text-base text-primary1 font-bold"
                  >Description:
              </label>
              <input              
                  type="text"
                  id="description"
                  {...register("description", { 
                    required: {
                      value: true,
                      message: "A description is required",
                    }, 
                  })}
                  className="text-lg bg-white appearance-none border-2 border-main2 rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-accent1"
              />
              <p className="text-accent2 text-sm mt-1 italic">{errors.description?.message}</p>
          </div>
          <div className="mt-6">
              <label                 
                  htmlFor="needleSize"
                  className="text-base text-primary1 font-bold"
                  >Needle Size:
              </label>
              <input              
                  type="text"
                  id="needleSize"
                  {...register("needleSize", { 
                    required: {
                      value: true,
                      message: "A Needle Size is required",
                    }, 
                  })}
                  className="text-lg bg-white appearance-none border-2 border-main2 rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-accent1"
              />
              <p className="text-accent2 text-sm mt-1 italic">{errors.needleSize?.message}</p>
          </div>
          <div className="mt-6">
              <label                 
                  htmlFor="yarnWeight"
                  className="text-base text-primary1 font-bold"
                  >Yarn Weight:
              </label>
              <input              
                  type="text"
                  id="yarnWeight"
                  {...register("yarnWeight", { 
                    required: {
                      value: true,
                      message: "A Yarn Weight is required",
                    }, 
                  })}
                  className="text-lg bg-white appearance-none border-2 border-main2 rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-accent1"
              />
              <p className="text-accent2 text-sm mt-1 italic">{errors.yarnWeight?.message}</p>
          </div>
          <div className="flex items-center justify-center my-10">          
            <button 
                type="submit"
                className="altfont text-2xl py-2 px-10 mx-2 rounded-full bg-accent1 text-white text-shadow-sm hover:bg-accent2 align-center transition ease-in-out hover:scale-110 duration-300 whitespace-nowrap"
                >                  
                  Create
            </button>            
          </div>
        </form>
    </div>
  );
}

