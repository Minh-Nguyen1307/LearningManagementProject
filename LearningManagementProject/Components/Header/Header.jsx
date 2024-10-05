import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faBell, faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [firstLetter, setFirstLetter] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          // If the user is logged in, show avatar and icons
          <div className="w-60 d-flex justify-around items-center">
            <Link to="/favorites"><FontAwesomeIcon icon={faHeart} className="text-xl" /></Link>
            <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} className="text-xl" /></Link>
            <Link to="/notifications"><FontAwesomeIcon icon={faBell} className="text-xl" /></Link>
            
            <div className="user-avatar bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full">
              {firstLetter}
            </div>
          </div>
        ) : (
          // If the user is not logged in, show Log in and Sign up buttons
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
