import React, {useState} from 'react'
import ListStatus from './ListStatus/ListStatus';
import {v4 as uuidv4} from 'uuid'
const status = [
  {
    id: uuidv4(),
    numberStatus: '250+',
    describeStatus: 'Courses by our best mentors',
  },
  {
    id: uuidv4(),
    numberStatus: '1000+',
    describeStatus: 'Courses by our best mentors',
  },
  {
    id: uuidv4(),
    numberStatus: '15+',
    describeStatus: 'Courses by our best mentors',
  },
  {
    id: uuidv4(),
    numberStatus: '2400+',
    describeStatus: 'Courses by our best mentors',
  },
]
const HomeStatus=() => {
  const[homeStatus,setHomeStatus] = useState(status)
  return (
    <div>
      <ListStatus  homeStatus={homeStatus}/>
    </div>
  )
}
export default HomeStatus;