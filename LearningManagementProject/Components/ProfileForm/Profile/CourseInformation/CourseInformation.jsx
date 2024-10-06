import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders, faArrowUpWideShort, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import { myCourses } from './Data';

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
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Relevance</button>
                        <ul className="dropdown-menu text-center w-full ">
                            <li className="btn btn-light w-full">Author</li>
                            <li className="btn btn-light w-full">Ratings</li>
                            <li className="btn btn-light w-full">Courses</li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faSliders} className='mx-2' />Filter
                        </button>
                        <ul className="dropdown-menu text-center">
                            <li className="btn btn-light w-full">
                                <FontAwesomeIcon icon={faArrowUpWideShort} className='mx-2' />Ratings
                            </li>
                            <li className="btn btn-light w-full">
                                <FontAwesomeIcon icon={faArrowDownWideShort} className='mx-2' />Ratings
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <div className="mx-10">
                {/* Rendering the courses */}
                {myCourses && myCourses.map(course => (
                    <div key={course.id} className="border-b border-gray-300 p-4 flex items-center">
                        <img src={course.imageCourse} alt={course.title} className="h-24 w-24 mr-4" />
                        <div>
                            <h4 className="text-lg font-semibold">{course.title}</h4>
                            <p className="text-sm text-gray-600">{course.author}</p>
                            <p className="text-sm">{course.rating}</p>
                            <p className="text-sm">{course.content}</p>
                            <p className="text-lg font-bold">{course.cost}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseInformation;
