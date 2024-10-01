import React from 'react'
import Comment from '../Comment/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'



const ListComments = (props) => {
    const {comments = [], nextSlide, prevSlide } = props;
    const listComments = comments && comments.map((comment) => <Comment
    key = {comment.id}
    commentText = {comment.commentText}
  
    avatar = {comment.avatar}
    commentJob = {comment.commentJob}
    commentName = {comment.commentName}
     />)
  return (
    <div>
        <div>
            <h3 className='text-4xl font-semibold text-gray-800 mx-10'>What Our Customer Say</h3>
            <h3 className='text-4xl font-semibold text-gray-800 mx-10'>About Us</h3>
        </div>
        <div className='d-flex justify-end mx-10 gap-2 my-5'>
            <div><button type='click' onClick={prevSlide} className='btn btn-light'><FontAwesomeIcon icon={faArrowLeft} className='h-8' /></button></div>
            <div><button type='click' onClick={nextSlide} className='btn btn-light'><FontAwesomeIcon icon={faArrowRight} className='h-8' /></button></div>
        </div>
        <div className='d-flex items-start justify-between mx-10 my-10 '>
            {listComments}
        </div>
    </div>
  )
}
export default ListComments;