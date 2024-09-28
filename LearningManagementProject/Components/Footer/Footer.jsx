import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-gray-900 d-flex justify-around items-center h-96 '>
        <div className="mx-10 d-flex justify-between items-start text-white h-40 font-extralight w-full ">
            <div className="w-1/3">
                <Link to="/"><img src="./public/byway2.png" alt="logo" /></Link>
                <p>Empowering learners through accessible and engaging online education. </p>
                <p>Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.</p>
            </div>
            <div className="">
                <h3 className='text-xl font-semibold text-white'>Get Help</h3>
                <p>Contact Us</p>
                <p>Latest Articles</p>
                <p>FAQ</p>
            </div>
            <div className="">
                <h3 className='text-xl font-semibold text-white'>Programs</h3>
                <p>Art & Design</p>
                <p>Business</p>
                <p>IT & Software</p>
                <p>Languages</p>
                <p>Programming</p>
            </div>
            <div className="">
                <h3 className='text-xl font-semibold text-white'>Contact Us</h3>
                <p>Address: 123 Main Street, Anytown, CA12345</p>
                <p>Tel: +(123)456-7890</p>
                <p>Mail: bywayedu@webkul.in</p>
                <span><img src="./public/Icon social.png" alt="" /></span>
            </div>
        </div>
   </div>
  )
}
