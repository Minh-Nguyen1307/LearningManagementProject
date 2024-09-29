import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Course = (props) =>  {
    const {imageCourse, title, author, rating, content, cost } = props;
  return (
    <div className='d-flex flex-column items-center justify-around w-1/5 h-[500px] border-4 rounded-3xl'>
        <img src={imageCourse} className='w-4/5'/>
        <div className='d-flex flex-column justify-between items-start h-48'>
            <h6 className='text-3xl font-semibold text-gray-800'>{title}</h6>
            <p>{author}</p>
            <p>⭐⭐⭐⭐⭐{rating}</p>
            <p>{content}</p>
            <h5 className='text-2xl font-semibold text-gray-800'>{cost}</h5>
        </div>
    </div>
  )
}
export default Course;