import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import ListInstructors from './ListInstructors/ListInstructors'
const instructor =[
    {
        id: uuidv4(),
        imageInstructor:'./public/TopInstructor.png',
        authorName:'Ronald Rechards',
        jobTitle:'UI/UX Designer',
        starRating:'4.9',
        numberStudent:"2400 Students",
    },
    {
        id: uuidv4(),
        imageInstructor:'./public/TopInstructor.png',
        authorName:'Ronald Rechards',
        jobTitle:'UI/UX Designer',
        starRating:'4.9',
        numberStudent:"2400 Students",
    },
    {
        id: uuidv4(),
        imageInstructor:'./public/TopInstructor.png',
        authorName:'Ronald Rechards',
        jobTitle:'UI/UX Designer',
        starRating:'4.9',
        numberStudent:"2400 Students",
    },
    {
        id: uuidv4(),
        imageInstructor:'./public/TopInstructor.png',
        authorName:'Ronald Rechards',
        jobTitle:'UI/UX Designer',
        starRating:'4.9',
        numberStudent:"2400 Students",
    },
    {
        id: uuidv4(),
        imageInstructor:'./public/TopInstructor.png',
        authorName:'Ronald Rechards',
        jobTitle:'UI/UX Designer',
        starRating:'4.9',
        numberStudent:"2400 Students",
    },
    
    
]
const HomeInstructor=()=> {
    const [homeInstructor, setHomeInstructor] = useState(instructor)
  return (
    <div>
        <ListInstructors homeInstructor = {homeInstructor}/>
    </div>
  )
}
export default HomeInstructor;
