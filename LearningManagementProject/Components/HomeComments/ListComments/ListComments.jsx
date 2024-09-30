import React from 'react'
import Comment from '../Comment/Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'


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
            <h3>What Our Customer Say</h3>
            <h3>About Us</h3>
        </div>
        <div>
            <div><button type='click' onClick={prevSlide}><FontAwesomeIcon icon={faArrowLeft} /></button></div>
            <div><button type='click' onClick={nextSlide}><FontAwesomeIcon icon={faArrowRight} /></button></div>
        </div>
        <div>
            {listComments}
        </div>
    </div>
  )
}
export default ListComments;