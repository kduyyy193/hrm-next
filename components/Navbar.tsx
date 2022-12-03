import React from 'react'

const Navbar = () => {
  return (
    <div className='flex item-center pb-4 border-b border-gray-500'>
      <div className=' text-2xl font-semibold tracking-widest'>MRHHH ☃️</div>
      <div className=' text-lg ml-auto'>
          <button className='ml-4 uppercase'>Home</button>
          <button className='ml-4 uppercase'>Details</button>
      </div>
    </div>
  )
}

export default Navbar