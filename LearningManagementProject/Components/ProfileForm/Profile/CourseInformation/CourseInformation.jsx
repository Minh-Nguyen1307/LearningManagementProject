import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders, faArrowUpWideShort, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';



const CourseInformation = () => {
   
  return (
    <div>
        <div>
            <h3 className='text-3xl'>Courses</h3>
        </div>
        <br />
        <div className='d-flex justify-between items-center'>
            <div className='w-1/2'>
                <form className='border border-black  h-1/2 rounded-lg d-flex justify-start bg-slate-50'>
                <button type='submit'><FontAwesomeIcon icon={faMagnifyingGlass} className='ml-2' /></button>
                <input type="search" placeholder='Search Courses' className='w-11/12 border-none focus:outline-none p-2 bg-slate-50' />
                </form>
            </div>
            <div className='d-flex items-center justify-around w-1/3'>
                <p className='text-xs'>Sort By</p>
                <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Relevance</button>
                        <ul className="dropdown-menu text-center w-full ">
                            <button className="btn btn-light w-full"><li className=''>Author</li></button>
                            <button className="btn btn-light w-full"><li className=' '>Ratings</li></button>
                            <button className="btn btn-light w-full"><li className=''>Courses</li></button>
                        </ul>
                </div>
                <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={faSliders} className='mx-2' />Filter</button>
                        <ul className="dropdown-menu text-center">
                            <button  className="btn btn-light w-full"><li className=''><FontAwesomeIcon icon={faArrowUpWideShort} className='mx-2'/>Ratings</li></button>
                            <button className="btn btn-light w-full"><li className=''><FontAwesomeIcon icon={faArrowDownWideShort} className='mx-2'/>Ratings</li></button>
                        </ul>
                </div>
            </div>
        </div>
            
        <div>

        </div>
    </div>
  )
}
export default CourseInformation;