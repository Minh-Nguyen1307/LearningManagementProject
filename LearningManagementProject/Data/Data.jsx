// Data.js
import { v4 as uuidv4 } from 'uuid';

const myCourses = [
    {
        id: uuidv4(),
        imageCourse: './public/Courses.png', // Update the image path as needed
        title: "Beginner's Guide to Design",
        author: 'By Ronald Richards',
        rating: '1200 Ratings',
        content: '22 Total Hours. 155 Lectures. Beginner',
        cost: '$149.9',
    },
    {
        id: uuidv4(),
        imageCourse: './public/2.png', // Use different images
        title: "Intermediate Design Concepts",
        author: 'By Sarah Johnson',
        rating: '800 Ratings',
        content: '18 Total Hours. 120 Lectures. Intermediate',
        cost: '$199.9',
    },
    {
        id: uuidv4(),
        imageCourse: './public/3.png', // Use different images
        title: "Advanced Graphic Design",
        author: 'By Michael Brown',
        rating: '1500 Ratings',
        content: '30 Total Hours. 200 Lectures. Advanced',
        cost: '$299.9',
    },
    {
        id: uuidv4(),
        imageCourse: './public/a1.png', // Use different images
        title: "UX/UI Design Bootcamp",
        author: 'By Emily Davis',
        rating: '900 Ratings',
        content: '25 Total Hours. 160 Lectures. Beginner to Advanced',
        cost: '$249.9',
    },
];

export default myCourses;
