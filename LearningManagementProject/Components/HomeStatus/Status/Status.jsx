import React from 'react'


const Status = (props) => {
    const {numberStat, describeStat} = props;


  return (
    <div className=''>
        <h3>{numberStat}</h3>
        <p>{describeStat}</p>
    </div>
  )
}
export default Status;
