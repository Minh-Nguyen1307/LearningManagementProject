import React from 'react'

import Status from '../Status/Status';

const ListStatus=(props) =>{
  const {homeStatus = []} = props;
  const listStatus = homeStatus && homeStatus.map((status) => (
    <Status
    key={status.id}
    numberStatus = {status.numberStatus}
    describeStatus = {status.describeStatus} />

  ))

  return (
    <div className='d-flex justify-around items-center h-48 bg-zinc-100 gap-2 mb-5 '>
      {listStatus}
    </div>
  )
}
export default ListStatus;
