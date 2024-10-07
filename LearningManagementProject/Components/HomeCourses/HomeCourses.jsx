import React, { useState } from 'react'
import ListCourses from './ListCourses/ListCourses'
import {v4 as uuidv4} from 'uuid'

const course = [{
    id: uuidv4(),
    imageCourse:'./public/Courses.png',
    title:"Beginner's Guide to Design",
    author:'By Ronald Richards',
    rating:'1200 Ratings',
    content:'22 Total Hours. 155 Lectures. Beginner',
    cost:'$149.9',
},
{   id: uuidv4(),
    imageCourse:'./public/Courses.png',
    title:"Beginner's Guide to Design",
    author:'By Ronald Richards',
    rating:'1200 Ratings',
    content:'22 Total Hours. 155 Lectures. Beginner',
    cost:'$149.9',
},
{   id: uuidv4(),
    imageCourse:'./public/Courses.png',
    title:"Beginner's Guide to Design",
    author:'By Ronald Richards',
    rating:'1200 Ratings',
    content:'22 Total Hours. 155 Lectures. Beginner',
    cost:'$149.9',
},
{id: uuidv4(),
    imageCourse:'./public/Courses.png',
    title:"Beginner's Guide to Design",
    author:'By Ronald Richards',
    rating:'1200 Ratings',
    content:'22 Total Hours. 155 Lectures. Beginner',
    cost:'$149.9',
}
];

const HomeCourses = () => {
    const [homeCourses, setHomeCourses] = useState(course);
  return (
    <div>
        <ListCourses homeCourses = {homeCourses} />
    </div>
  )
}

export default HomeCourses;