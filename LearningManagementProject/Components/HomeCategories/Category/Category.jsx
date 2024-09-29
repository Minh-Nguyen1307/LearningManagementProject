import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Category = (props) => {
    const { iconCategory, nameCategory, numberCategory}  = props;
  return (
    <div className='d-flex flex-column items-center justify-around w-1/5 h-96 border-2 rounded-3xl'>
        <div className='w-40 h-24'>
            <FontAwesomeIcon icon={iconCategory} className='text-6xl h-44 w-56 bg-blue-800' />
        </div>
        <h6>{nameCategory}</h6>
        <p>{numberCategory}</p>
    </div>
  )
}
export default Category;