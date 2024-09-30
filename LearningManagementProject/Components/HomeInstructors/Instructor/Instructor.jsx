import React from 'react'
import { Link } from 'react-router-dom'
const Instructor=(props) => {
    const {imageInstructor, authorName, jobTitle, starRating, numberStudent} = props;
  return (
    <div className='h-96 w-1/6 border-4 p-5 rounded-3xl d-flex flex-column items-center justify-between gap-3'>
        <img src= {imageInstructor} alt="" />
        <Link to ="/" className='text-2xl font-semibold text-gray-800'>{authorName}</Link>
        <p>{jobTitle}</p>
        <div className='d-flex justify-between text-lg border-t-2 gap-5 pt-3'>
          <p>⭐{starRating}</p>
          <p>{numberStudent}</p>
        </div>
    </div>
  )
}
export default Instructor;
