import React, {useState} from 'react'
import ListComments from './ListComments/ListComments';
import {v4 as uuidv4} from 'uuid'
const comment = [{
    id: uuidv4(),
    
    commentText:"Great service, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',
},
{   id: uuidv4(),
    
    commentText:"Great service2, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service3, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service4, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service5, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
   
    commentText:"Great service6, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service7, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service8, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service9, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service10, highly recommend",
    avatar:'',
    commentName:'',
    commentJob:'',

},

]
const HomeComments = () => {
    const [comments, setComments] = useState(comment);
    const itemToShow = 3;
    const nextSlide = () =>
    {
        setComments((prevComments) => {
            const newComments = [...prevComments];
            newComments.push(newComments.shift());
            return newComments;
        }
        )
    }
    const prevSlide = () =>
        {
            setComments((prevComments) => {
                const newComments = [...prevComments];
                newComments.unshift(newComments.pop());
                return newComments;
            }
            )
        }
  return (
    <div>
        <ListComments
        comments={comments.slice(0, itemToShow)}
        nextSlide = {nextSlide}
        prevSlide = {prevSlide} />
    </div>
  )
}
export default HomeComments;