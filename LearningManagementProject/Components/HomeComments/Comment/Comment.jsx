import React from 'react'

const Comment=(props) => {
    const {commentText,avatar,commentJob,commentName} = props;
  return (
    <div className='w-1/4 border-4 rounded-2xl h-80 d-flex flex-col items-center justify-around '>    
      <p className='my-3 mx-3'>{commentText}</p>
      <img src={avatar} alt="" />
      <h3>{commentName}</h3>
      <p>{commentJob}</p>
    </div>
    
  )
}
export default Comment;
