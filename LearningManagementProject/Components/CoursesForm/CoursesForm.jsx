import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders } from '@fortawesome/free-solid-svg-icons';


export default function CoursesForm() {
  return (
    <div className='mx-10'>
        <div className='my-10'>
          <h3 className='text-3xl'>Courses</h3>
          <p className='text-2xl'>All Development Courses</p>
        </div>
        <div>
          <div>
            <button button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faSliders} className='mx-2' />Filter
                        </button>
                        <p className='text-xs'>Sort By</p>
            <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Relevance
                        </button>
                        <ul className="dropdown-menu text-center w-full">
                            <li className="btn btn-light w-full" >Author</li>
                            <li className="btn btn-light w-full" >Ratings</li>
                            <li className="btn btn-light w-full" >Relevance</li>
                        </ul>
                    </div>
          </div>
        </div>
    </div>
  )
}
