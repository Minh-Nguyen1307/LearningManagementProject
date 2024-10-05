import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import {faSun} from '@fortawesome/free-solid-svg-icons'


  const Header = () => {
    // const [isChecked, setIsChecked] = useState(false);
  
    // const handleToggle = (e) => {
    //   setIsChecked(e.target.checked);
    // };
  return (
    <div className=' bg-slate-50 text-2xl'>
    <div className='mx-10 d-flex justify-between items-center h-20 font-normal'>
        <div className=''>
        <Link to="/"><img src="./public/BYWAY1.png" alt="logoByway" className='w-32'/></Link>
        </div>
        <div className=''>
        <Link to ="">Categories</Link>
        </div>
        <form className='border border-black w-2/5 h-1/2 rounded-lg d-flex justify-start '>
            <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} className='ml-2'/></button>
            <input type="search" placeholder='Search courses' className='w-11/12 border-none focus:outline-none p-2 bg-slate-50' />
        </form>
        <div className=''>
        <Link to ="">Teach on Byway</Link>
        </div>
        
        {/* <div className='relative w-16 h-8'>
      <input 
        type="checkbox" 
        className='opacity-0 absolute peer h-full w-full' 
        onChange={handleToggle}
      />
            <div className={`h-7 w-12 relative d-flex justify-between align-items-center rounded-full p-0.5 ${isChecked ? 'bg-yellow-400' : 'bg-black'}`}
      >
        <FontAwesomeIcon icon={faMoon} className='text-yellow-500' />
        <FontAwesomeIcon icon={faSun} className='text-orange-500' />
        <span className={`bg-white w-6 h-6 absolute rounded-full transform ${isChecked ? 'translate-x-6' : ''}`}></span>
      </div>
        </div> */}
        <div className='w-60 d-flex justify-around items-center'>
            <Link to =""><FontAwesomeIcon icon={faCartShopping} className='text-xl'/></Link>
            <Link to ="/LogIn"><button className='btn btn-light border p-2'>Log in</button></Link>
            <Link to ="/SignUp"><button className='btn btn-success border bg-emerald-800 p-2'>Sign up</button></Link>
        </div>
    </div>
    </div>
    
  )
}
export default Header;
