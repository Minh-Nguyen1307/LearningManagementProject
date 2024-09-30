import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Comment=(props) => {
    const {commentText,avatar,commentJob,commentName} = props;
  return (
    <div>
       <div>
            
            <p>{commentText}</p>
       </div>
       <div>
            <img src={avatar} alt="" />
            <h3>{commentName}</h3>
            <p>{commentJob}</p>
       </div>
    </div>
  )
}
export default Comment;
