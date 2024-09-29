import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Category = (props) => {
    const { iconCategory, nameCategory, numberCategory}  = props;
  return (
    <div className='d-flex flex-column items-center justify-around w-1/5 h-96 border-2 rounded-3xl'>
        
        <div className='w-40 h-40  bg-blue-200 rounded-full d-flex items-center justify-center'>
            <FontAwesomeIcon icon={iconCategory} className='h-14 text-blue-600' />
        </div>
        <h6 className='text-3xl font-semibold text-gray-800'>{nameCategory}</h6>
        <p>{numberCategory}</p>
    </div>
  )
}
export default Category;