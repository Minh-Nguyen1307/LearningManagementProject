import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSliders, faArrowUpWideShort, faArrowDownWideShort } from '@fortawesome/free-solid-svg-icons';
import { myCourses } from './Data';

const CourseInformation = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('Relevance');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCourses = myCourses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedCourses = filteredCourses.sort((a, b) => {
        switch (sortOption) {
            case 'Author':
                return a.author.localeCompare(b.author);
            case 'Ratings':
                return parseInt(b.rating) - parseInt(a.rating);
            default:
                return 0; // Default to no sorting
        }
    });

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
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </form>
                </div>
                <div className='flex items-center justify-around w-1/3'>
                    <p className='text-xs'>Sort By</p>
                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {sortOption}
                        </button>
                        <ul className="dropdown-menu text-center w-full">
                            <li className="btn btn-light w-full" onClick={() => setSortOption('Author')}>Author</li>
                            <li className="btn btn-light w-full" onClick={() => setSortOption('Ratings')}>Ratings</li>
                            <li className="btn btn-light w-full" onClick={() => setSortOption('Relevance')}>Relevance</li>
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
                {/* Rendering the courses */}
                {sortedCourses.map(course => (
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
