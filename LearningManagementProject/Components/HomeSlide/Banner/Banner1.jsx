import React from 'react'

const Banner1 = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mx-10'>
        <div className='w-1/2'>
            <h2>Unlock Your Potential</h2>
            <p>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience</p>
            <button type="button" className="btn btn-primary">Start your instructor journey</button>
        </div>
        <div className='w-1/4'>
            <img src="./public/banner1.png" alt="" />
        </div>
        <div className='w-1/4'>
        <img src="./public/banner11.png" alt="" />
        </div>
    </div>
  )
}
export default Banner1;
