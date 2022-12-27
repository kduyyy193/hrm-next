import React from 'react'
import { User } from '../models/User.model'

const UserDetails = ({name, sex, address, date, dateJoined, group, description,hobby}: User) => {
const month = date?.getUTCMonth() + 1; //months from 1-12
const day = date?.getUTCDate();
const year = date?.getUTCFullYear();
const newDate = year + "/" + month + "/" + day;
const monthJoined = dateJoined?.getUTCMonth() + 1; //months from 1-12
const dayJoined = dateJoined?.getUTCDate();
const yearJoined = dateJoined?.getUTCFullYear();
const newDateJoined = yearJoined + "/" + monthJoined + "/" + dayJoined;

  return (
    <div className="text-white capitalize max-w-xl mx-auto my-8 tracking-wider  ">
      <div className='text-end font-bold hover:cursor-pointer hover:opacity-80'>Edit ⚙️</div>
      <div className="flex justify-between">
        {/* <img src={props.image} className="w-44 h-44  rounded-full border-4 border-blue-400" alt="ERROR" /> */}
        <div className='flex flex-col justify-center grow ml-8 '>
          <p className='mb-1'><span className='underline mr-2'>Name: </span>{name}</p>
          <p className='mb-1'><span className='underline mr-2'>Date: </span> {newDate}</p>
          <p className='mb-1'> <span className='underline  mr-2'>Address: </span> <span className='capitalize'>{address}</span></p>
          <p className='mb-1'><span className='underline mr-2'>Group: </span> <span className='uppercase'>{group}</span></p>
          <p className='mb-1'><span className='underline mr-2'>DateJoined: </span> {newDateJoined}</p>
        </div>
      </div>
      <div className='mt-8'>
        <p className='normal-case mb-1 '><span className='underline'>Description:</span>  {description}</p>  
        <p className='normal-case mb-1 '><span className='underline'>Hobby:</span> {hobby}</p>  
      </div>
    </div>
  )
}

export default UserDetails