import React, { useState } from 'react'
import ListCategories from './ListCategories/ListCategories'
import { faMicroscope, faWindowMaximize, faCreditCard, faAtom } from '@fortawesome/free-solid-svg-icons';
const category = [
    {
        id: 1,
        iconCategory: faMicroscope,
        nameCategory: "Astrology",
        numberCategory: "11 Courses",
    },
    {
        id: 2,
        iconCategory: faWindowMaximize,
        nameCategory: "Development",
        numberCategory: "12 Courses",
    },
    {
        id: 3,
        iconCategory: faCreditCard,
        nameCategory: "Marketing",
        numberCategory: "13 Courses",
    },
    {
        id: 4,
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