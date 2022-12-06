import React from 'react'
import { User } from '../models/User.model'

const UserDetails = (props: User) => {
  return (
    <div className='text-white'>
        <p>{props.name}</p>
        <p>{props.group}</p>
        <p>{props.dateJoined}</p>
    </div>
  )
}

export default UserDetails