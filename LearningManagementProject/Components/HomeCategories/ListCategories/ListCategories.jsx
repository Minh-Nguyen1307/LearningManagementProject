import React from 'react'
import Category from '../Category/Category'
import { Link } from 'react-router-dom'

const ListCategories =(props) => {
    const {categories =[]} = props;

  const listCategory = categories.map((category) => (<Category key={category.id} iconCategory={category.iconCategory} nameCategory={category.nameCategory} numberCategory={category.numberCategory} /> ))
  return (
    <div>
        <h4>Top Categories</h4>
        <Link to = "/">See all</Link>
        <div className="d-flex items-center justify-between mx-10 ">
            {listCategory}
        </div>
    </div>
  )
}
export default ListCategories;
