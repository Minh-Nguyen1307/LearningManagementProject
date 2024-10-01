import React, {useState} from 'react'
import ListComments from './ListComments/ListComments';
import {v4 as uuidv4} from 'uuid'
const comment = [{
    id: uuidv4(),
    
    commentText:"Great service, highly recommend",
    avatar:'./public/avatar.png',
    commentName:'Jane Doe',
    commentJob:'Designer',
},
{   id: uuidv4(),
    
    commentText:"Byway's tech courses are top-notch",
    avatar:'./public/avatar.png',
    commentName:'Jax',
    commentJob:'Developer',

},
{   id: uuidv4(),
    
    commentText:"As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ",
    avatar:'./public/avatar.png',
    commentName:'Mike',
    commentJob:'Engineer',

},
{   id: uuidv4(),
    
    commentText:"As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ",
    avatar:'./public/avatar.png',
    commentName:'John',
    commentJob:'Witch',

},
{   id: uuidv4(),
    
    commentText:"Great service, highly recommend",
    avatar:'./public/avatar.png',
    commentName:'Hanna',
    commentJob:'Catwalk',

},
{   id: uuidv4(),
   
    commentText:"As someone who's always looking to stay ahead in the rapidly evolving tech world",
    avatar:'./public/avatar.png',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service7, highly recommend",
    avatar:'./public/avatar.png',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service8, highly recommend",
    avatar:'./public/avatar.png',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service9, highly recommend",
    avatar:'./public/avatar.png',
    commentName:'',
    commentJob:'',

},
{   id: uuidv4(),
    
    commentText:"Great service10, highly recommend",
    avatar:'./public/avatar.png',
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