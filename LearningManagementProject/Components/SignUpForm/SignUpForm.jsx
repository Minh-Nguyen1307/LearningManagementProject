import React, {useState} from 'react'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SignUpForm.css'
const SignUpForm = () => {
  const [formValues, setFormValue] = useState( {
    firstName: '',
    lastName:'',
    email:'',
    useName:'',
  });
  
  
  const handleOnChange = (event) => {
    const {value} = event.target;
    setFirstName(value);
  } 
  const {firstName, lastName, email, useName} = formValues;
  return (
        <div className="row no-gutters">
          <div className="col-12 col-sm-6 col-md-8 d-flex flex-col items-center">
            <h3 className="text-4xl font-semibold text-gray-800 my-16 ">Create Your Account</h3>
            <form className='d-flex flex-col justify-around item h-[500px] w-[500px]'>
              <div>
                <p className="text-gray-950 font-medium text-xl my-2">Full Name</p>
                <input type="text" placeholder="First Name" className="border rounded-md pl-4 w-1/2 h-9" onChange={handleOnChange} value = {value} />
                <input type="text" placeholder="Last Name" className="border rounded-md pl-4 w-1/2 h-9 " />
              </div>
    
              <div>
                <p className="text-gray-950 font-medium text-xl my-2">User Name</p>
                <input type="text" placeholder="User Name" className="border rounded-md w-full pl-4 h-9" />
              </div>
    
              <div>
                <p className="text-gray-950 font-medium text-xl my-2">Email</p>
                <input type="email" placeholder="Email ID" className="border rounded-md w-full pl-4 h-9" />
              </div>
    
              <div className=''>
                <p className="text-gray-950 font-medium text-xl my-2" >Password</p>
                <input type="password" placeholder="Enter Password" className="border rounded-md w-full pl-4 h-9" />
               
              </div>
              <div>
                <p className="text-gray-950 font-medium text-xl my-2">Confirm Password</p>
                <input type="password" placeholder="Confirm Password" className="border rounded-md w-full pl-4 h-9" />
              </div>

    
              <button type="submit" className="btn btn-dark mt-4 text-xl">
                Create Account <FontAwesomeIcon icon={faArrowRight} className="h-6" />
              </button>
            </form>
            <div className='text-center my-5'>
              ----------------------Sign in with ----------------------
              <div className='d-flex justify-between my-3 w-[500px]'>
                <button className='btn btn-light'><img src="./public/1.png" alt="" className='' /></button>
                <button className='btn btn-light mx-5'><img src="./public/2.png" alt="" className='' /></button>
                <button className='btn btn-light'><img src="./public/3.png" alt="" className='' /></button>
              </div>

            </div>
          </div>
          
          
          <div className="col-6 col-md-4 ">
            <img src="./public/signup.png" alt="Sign Up" className='h-[900px]' />
          </div>
        </div>
      );
    }
    export default SignUpForm;