import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SignUpForm.css';
import { v4 as uuidv4 } from 'uuid';

const SignUpForm = () => {
  const [members, setMembers] = useState([]);
  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    useName: '',
    passWord: '',
    confirmPassword: '',
  });

  // Function to validate if password has uppercase, lowercase, and special character
  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return hasUpperCase && hasLowerCase && hasSpecialSymbol;
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });

    // Validate passwords on the fly and remove errors if valid
    if (name === 'passWord') {
      if (validatePassword(value)) {
        setErrors((prevErrors) => ({ ...prevErrors, password: '' })); // Clear password error when valid
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: 'Password must contain an uppercase letter, a lowercase letter, and a special character.',
        }));
      }
    }

    if (name === 'confirmPassword') {
      if (value === formValues.passWord) {
        setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: '' })); // Clear confirm password error when matching
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: 'Passwords do not match.',
        }));
      }
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    // Re-validate passwords on submit
    if (!validatePassword(formValues.passWord)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: 'Password must contain an uppercase letter, a lowercase letter, and a special character.',
      }));
    }

    if (formValues.passWord !== formValues.confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match.',
      }));
    }

    // If no errors, proceed to submit
    if (!errors.password && !errors.confirmPassword) {
      const newMember = {
        ...formValues,
        id: uuidv4(),
      };
      setMembers([...members, newMember]);
    // Save to local storage
    // Retrieve existing members from local storage
    const existingMembers = JSON.parse(localStorage.getItem('userData')) || [];
    existingMembers.push(newMember); // Add new member to the list

    // Save updated members back to local storage
    localStorage.setItem('userData', JSON.stringify(existingMembers));
    alert('User signed up!');

      // Reset the form
      setFormValues({
        firstName: '',
        lastName: '',
        email: '',
        useName: '',
        passWord: '',
        confirmPassword: '',
      });
    }
  };

  const { firstName, lastName, email, useName, passWord, confirmPassword } = formValues;

  return (
    <div className="row no-gutters">
      <div className="col-12 col-sm-6 col-md-8 d-flex flex-col items-center">
        <h3 className="text-4xl font-semibold text-gray-800 my-16">Create Your Account</h3>
        <form className="d-flex flex-col justify-around item h-[500px] w-[500px]" onSubmit={handleSubmitForm}>
          <div>
            <p className="text-gray-950 font-medium text-xl my-2">Full Name <span className="text-red-600">*</span></p>
            <input
              type="text"
              placeholder="First Name"
              className="border rounded-md pl-4 w-1/2 h-9"
              onChange={handleOnChange}
              value={firstName}
              name="firstName"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border rounded-md pl-4 w-1/2 h-9"
              onChange={handleOnChange}
              value={lastName}
              name="lastName"
              required
            />
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2">User Name <span className="text-red-600">*</span></p>
            <input
              type="text"
              placeholder="User Name"
              className="border rounded-md w-full pl-4 h-9"
              onChange={handleOnChange}
              value={useName}
              name="useName"
              required
            />
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2">Email <span className="text-red-600">*</span></p>
            <input
              type="email"
              placeholder="Email ID"
              className="border rounded-md w-full pl-4 h-9"
              onChange={handleOnChange}
              value={email}
              name="email"
              required
            />
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2">Password <span className="text-red-600">*</span></p>
            <input
              type="password"
              placeholder="Enter Password"
              className="border rounded-md w-full pl-4 h-9"
              onChange={handleOnChange}
              value={passWord}
              name="passWord"
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <p className="text-gray-950 font-medium text-xl my-2">Confirm Password <span className="text-red-600">*</span></p>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border rounded-md w-full pl-4 h-9"
              onChange={handleOnChange}
              value={confirmPassword}
              name="confirmPassword"
              required
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="btn btn-dark mt-4 text-xl">
            Create Account <FontAwesomeIcon icon={faArrowRight} className="h-6" />
          </button>
        </form>
        <div className='text-center my-4'>
              ----------------------Sign in with ----------------------
              <div className='d-flex justify-between my-3 w-[500px]'>
                <button className='btn btn-light'><img src="./public/1.png" alt="" className='' /></button>
                <button className='btn btn-light mx-5'><img src="./public/2.png" alt="" className='' /></button>
                <button className='btn btn-light'><img src="./public/3.png" alt="" className='' /></button>
              </div>

            </div>
      </div>

      <div className="col-6 col-md-4 p-0">
        <img src="./public/signup.png" alt="Sign Up" className="h-[900px] text-end" />
      </div>
    </div>
  );
};

export default SignUpForm;
