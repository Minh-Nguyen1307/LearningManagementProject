import React from 'react'
import { Link } from 'react-router-dom'
import Instructor from '../Instructor/Instructor';
const ListInstructors=(props) => {
    const {homeInstructor = []} = props;
    const listInstructor = homeInstructor && homeInstructor.map((instructor) => <Instructor
    key={instructor.id}
    imageInstructor={instructor.imageInstructor}
    authorName={instructor.authorName}
    jobTitle={instructor.jobTitle}
    starRating={instructor.starRating}
    numberStudent={instructor.numberStudent}
     />)
  return (
    <div className='h-[600px]'>
        <h4 className='text-4xl font-semibold text-gray-800 mx-10 mt-5'>Top Instructors</h4>
        <Link to = "/" className='text-blue-800 d-flex justify-end m-10'>See all</Link>
        <div className="d-flex items-center justify-between mx-10 h-72 ">
        {listInstructor}
        </div>
    </div>
  )
}
export default ListInstructors;