import React from 'react'
import Course from '../Course/Course';
import { Link } from 'react-router-dom'
const ListCourses = (props) => {
    const {homeCourses = []} = props;
    const listCourses = homeCourses && homeCourses.map((course) => <Course
    key = {course.id}
    imageCourse = {course.imageCourse}
    title = {course.title}
    author = {course.author}
    rating = {course.rating}
    content = {course.content}
    cost = {course.cost} />
    )

  return (
    <div >
        <h4 className='text-4xl font-semibold text-gray-800 mx-10 mt-5'>Top Courses</h4>
        <Link to = "/" className='text-blue-800 d-flex justify-end m-10'>See all</Link>
        <div className="d-flex items-center justify-between mx-10 h-[500px] ">
        {listCourses}
        </div>
    </div>
  )
}
export default ListCourses;