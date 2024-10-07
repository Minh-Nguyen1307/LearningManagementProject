import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link, useNavigate } from 'react-router-dom';

const LogInForm = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    passWord: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    // Retrieve the stored users data
    const storedUsers = JSON.parse(localStorage.getItem('userData')) || [];
    
    // Find user that matches entered email and password
    const matchingUser = storedUsers.find(
      (user) => user.email === formValues.email && user.passWord === formValues.passWord
    );

    if (matchingUser) {
      // Store user data in localStorage or context (if needed)
      localStorage.setItem('loggedInUser', JSON.stringify(matchingUser)); // Save user data for session
      alert('Successfully logged in!');
      navigate('/'); // Redirect to the homepage
    } else {
      setError('Incorrect email or password.');
    }
  };

  const { email, passWord } = formValues; // Destructure the formValues for easy access

  return (
    <div className="row no-gutters">
      <div className="col-12 col-sm-6 col-md-8 d-flex flex-col items-center">
        <h3 className="text-4xl font-semibold text-gray-800 mt-44 mb-10">Log in to your account</h3>
        <form className="d-flex flex-col justify-center item h-[300px] w-[500px]" onSubmit={handleSubmitForm}>
          <div>
            <p className="text-gray-950 font-medium text-xl my-4">Email <span className="text-red-600">*</span></p>
            <input
              type="email"
              placeholder="Email ID"
              className="border rounded-md w-full pl-4 h-9"
              value={email}
              name="email"
              onChange={handleOnChange}
              required
            />
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-4">Password <span className="text-red-600">*</span></p>
            <input
              type="password"
              placeholder="Enter Password"
              className="border rounded-md w-full pl-4 h-9"
              value={passWord}
              name="passWord"
              onChange={handleOnChange}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button type="submit" className="btn btn-dark mt-4 text-xl my-4">
            Log In <FontAwesomeIcon icon={faArrowRight} className="h-4" />
          </button>
        </form>
        <div className='text-center my-4'>
          ----------------------Log in with ----------------------
          <div className='d-flex justify-between my-3 w-[500px]'>
            <button className='btn btn-light'><img src="./public/1.png" alt="" className='' /></button>
            <button className='btn btn-light mx-5'><img src="./public/2.png" alt="" className='' /></button>
            <button className='btn btn-light'><img src="./public/3.png" alt="" className='' /></button>
          </div>
        </div>
      </div>

      <div className="col-6 col-md-4 p-0">
        <img src="./public/b1.png" alt="Sign Up" className="h-[900px] text-end" />
      </div>
    </div>
  );
};

export default LogInForm;
