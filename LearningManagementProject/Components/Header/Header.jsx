import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
  return (
    <div>
      <div className='d-flex justify-content-around'>
        <div className='header1'>
        <Link to="/"><img src="./public/Byway.png" alt="logoByway" /></Link>
        </div>
        <div className='header2'>
        <Link to ="">Categories</Link>
        </div>
        <div className='header3'>
            <span><FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' /></span>
            <input type="search" placeholder='Search courses' className='search-input' />
        </div>
        <div className='header4'>
          Teach on Byway
        </div>
        <div className='header5'>
            <span><FontAwesomeIcon icon={faCartShopping} className='cart-icon' /></span>
            <button className='logIn'>Log in</button>
            <button className='signIn'>Sign up</button>
        </div>
        </div>
    </div>
  )
}
