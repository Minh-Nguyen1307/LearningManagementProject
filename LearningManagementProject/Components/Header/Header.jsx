import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import {faSun} from '@fortawesome/free-solid-svg-icons'
import './Header.css'
export default function Header() {
  return (
    <div className='h-16 d-flex justify-content-around align-items-center'>
        <div className=''>
        <Link to="/"><img src="./public/Byway.png" alt="logoByway" /></Link>
        </div>
        <div className=''>
        <Link to ="">Categories</Link>
        </div>
        <div className=''>
            <span><FontAwesomeIcon icon={faMagnifyingGlass}/></span>
            <input type="search" placeholder='Search courses' className='search-input' />
        </div>
        <div className=''>
        <Link to ="">Teach on Byway</Link>
        </div>
        <div >
          <input type="checkbox" className='opacity-0'/>
            
              <FontAwesomeIcon icon={faMoon} className='text-yellow-500' />
              <FontAwesomeIcon icon={faSun} className='text-orange'/>
              <span className="ball"></span>
        </div>
        <div className=''>
            <Link to =""><FontAwesomeIcon icon={faCartShopping}/></Link>
            <Link to =""><button className='logIn'>Log in</button></Link>
            <Link to =""><button className='signIn'>Sign up</button></Link>
        </div>
    </div>
    
  )
}
