import React from 'react'

const Banner3 = () => {
  return (
    <div>
        <div className=' h-[800px] mx-10 d-flex justify-between items-center'>
            <div className='w-3/5'>
                <h2 className='text-5xl font-bold text-gray-800 mb-4'>Unlock Your Potential</h2>
                <p className='w-3/4'>Welcome to Byway, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student, professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience</p>
                <button type="button" className="btn btn-warning mt-4 p-2">Start your instructor journey</button>
            </div>
            <div className='w-2/5 p-4 relative h-[600px] d-flex justify-center items-center'>
                
                <div className='w-[600px] h-[600px] d-flex justify-center items-center '>
                    <img src="./public/banner33.png" alt="" className='w-[700px] absolute' />
                    <img src="./public/banner3.png" alt="" className='w-96 absolute rounded-full' />
                </div>
                <img src="./public/banner31.png" alt="" className='w-25 absolute bottom-0 left-0'/>
                <img src="./public/banner31.png" alt="" className='w-25 absolute top-0 right-0'/>
            </div>
            
        </div>
    </div>
  )
}
export default Banner3;
