
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders, faArrowUpWideShort, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';


const CourseInformation = () => {
  

    return (
        <div>
            <div>
                <h3 className='text-3xl'>Courses</h3>
            </div>
            <br />
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <form className='border border-black h-1/2 rounded-lg flex justify-start bg-slate-50'>
                        <button type='submit'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className='ml-2' />
                        </button>
                        <input
                            type="search"
                            placeholder='Search Courses'
                            className='w-11/12 border-none focus:outline-none p-2 bg-slate-50'
                            
                        />
                    </form>
                </div>
                <div className='flex items-center justify-around w-1/3'>
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
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faSliders} className='mx-2' />Filter
                        </button>
                        <ul className="dropdown-menu text-center">
                            <li className="btn btn-light w-full">
                                <FontAwesomeIcon icon={faArrowUpWideShort} className='mx-2' />Ascending
                            </li>
                            <li className="btn btn-light w-full">
                                <FontAwesomeIcon icon={faArrowDownWideShort} className='mx-2' />Descending
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="mx-10">
              
               
            </div>
        </div>
    );
}

export default CourseInformation;
