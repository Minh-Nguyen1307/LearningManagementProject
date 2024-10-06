import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import { v4 as uuidv4 } from 'uuid';

const SignUpForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
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

  // Function to validate the form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!validatePassword(formValues.passWord)) {
      newErrors.password = 'Password must contain an uppercase letter, a lowercase letter, and a special character.';
      isValid = false;
    }

    if (formValues.passWord !== formValues.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });

    if (name === 'passWord' || name === 'confirmPassword') {
      validateForm();
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const existingMembers = JSON.parse(localStorage.getItem('userData')) || [];

      const emailExists = existingMembers.some(
        member => member.email.toLowerCase() === formValues.email.toLowerCase()
      );

      if (emailExists) {
        alert('Email already exists. Please use a different email.');
        return;
      }

      const newMember = {
        ...formValues,
        id: uuidv4(),
      };

      existingMembers.push(newMember);
      localStorage.setItem('userData', JSON.stringify(existingMembers));
      alert('User signed up!');

      navigate('/LogIn'); // Redirect to login page after successful registration

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
            Create Account <FontAwesomeIcon icon={faArrowRight} className="h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
