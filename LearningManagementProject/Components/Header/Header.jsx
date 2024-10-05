import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBell, faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [firstLetter, setFirstLetter] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  useEffect(() => {
    // Retrieve the logged-in user's data from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser && loggedInUser.firstName) {
      const firstLetter = loggedInUser.firstName.charAt(0).toUpperCase();
      setFirstLetter(firstLetter);
      setIsLoggedIn(true); // User is logged in
    } else {
      setIsLoggedIn(false); // No user is logged in
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('loggedInUser'); // Clear user data from localStorage
    setIsLoggedIn(false); // Update state
    setDropdownVisible(false); // Close dropdown
  };

  const handleClickOutside = (event) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false); // Hide dropdown
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of the dropdown
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-slate-50 text-2xl'>
      <div className='mx-10 d-flex justify-between items-center h-20 font-normal'>
        <div>
          <Link to="/"><img src="./public/BYWAY1.png" alt="logoByway" className='w-32' /></Link>
        </div>
        <div>
          <Link to="/">Categories</Link>
        </div>
        <form className='border border-black w-2/5 h-1/2 rounded-lg d-flex justify-start '>
          <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} className='ml-2' /></button>
          <input type="search" placeholder='Search courses' className='w-11/12 border-none focus:outline-none p-2 bg-slate-50' />
        </form>
        <div>
          <Link to="/">Teach on Byway</Link>
        </div>

        {/* Conditionally Render Based on Login State */}
        {isLoggedIn ? (
          <div className="w-60 d-flex justify-around items-center relative">
            <Link to="/favorites"><FontAwesomeIcon icon={faHeart} className="text-xl" /></Link>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className="text-xl" /></Link>
            <Link to="/notifications"><FontAwesomeIcon icon={faBell} className="text-xl" /></Link>

            <div className="user-avatar bg-slate-300 text-black w-10 h-10 flex items-center justify-center rounded-full" onClick={() => setDropdownVisible(!dropdownVisible)}>
              <button>{firstLetter}</button>
            </div>

            {/* Dropdown Menu */}
            {dropdownVisible && (
              <div ref={dropdownRef} className="absolute left-32 mt-44 bg-white border border-gray-300 shadow-lg rounded-lg z-50 text-lg">
                <Link to="/information" className="block px-4 py-2 text-black hover:bg-gray-100">Information</Link>
                <hr />
                <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100">Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <div className='w-60 d-flex justify-around items-center'>
            <Link to =""><FontAwesomeIcon icon={faCartShopping} className='text-xl'/></Link>
            <Link to="/LogIn"><button className='btn btn-light border p-2'>Log in</button></Link>
            <Link to="/SignUp"><button className='btn btn-success border bg-emerald-800 p-2'>Sign up</button></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
