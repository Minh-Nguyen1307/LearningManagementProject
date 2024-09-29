import React, { useState } from 'react'
import ListCategories from './ListCategories/ListCategories'
import { faMicroscope, faWindowMaximize, faCreditCard, faAtom } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

import { v4 as uuidv4 } from 'uuid';

const uniqueId = uuidv4();
console.log(uniqueId); // Prints a unique UUID like "fdd60ef4-ff1f-4c64-b84d-67e3ff2b3f08"



const category = [
    {
        id: uuidv4(),
        iconCategory: faMicroscope,
        nameCategory: "Astrology",
        numberCategory: "11 Courses",
    },
    {
        id: uuidv4(),
        iconCategory: faWindowMaximize,
        nameCategory: "Development",
        numberCategory: "12 Courses",
    },
    {
        id: uuidv4(),
        iconCategory: faCreditCard,
        nameCategory: "Marketing",
        numberCategory: "13 Courses",
    },
    {
        id: uuidv4(),
        iconCategory: faAtom,
        nameCategory: "Physics",
        numberCategory: "14 Courses",
    }
]
const HomeCategories = () => {
    const [categories, setCategories] = useState(category)
    
  return (
    <div>
        <ListCategories categories={categories} />
    </div>
  )
}
export default HomeCategories;