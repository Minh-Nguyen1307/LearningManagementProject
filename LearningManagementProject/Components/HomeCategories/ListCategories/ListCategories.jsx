import React from 'react'
import Category from '../Category/Category'
import { Link } from 'react-router-dom'

const ListCategories =(props) => {
    const {categories =[]} = props;

  const listCategory = categories && categories.map((category) => (
  <Category
    key={category.id}
    iconCategory={category.iconCategory}
    nameCategory={category.nameCategory}
    numberCategory={category.numberCategory}
    />
  ));
  return (
    <div>
        <h4 className='text-4xl font-semibold text-gray-800 mx-10'>Top Categories</h4>
        <Link to = "/" className='text-blue-800 d-flex justify-end m-10'>See all</Link>
        <div className="d-flex items-center justify-between mx-10 ">
            {listCategory}
        </div>
    </div>
  )
}
export default ListCategories;
