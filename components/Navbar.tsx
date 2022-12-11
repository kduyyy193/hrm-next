import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex item-center pb-4 border-b border-gray-500 p-4 px-8'>
      <div className=' text-2xl font-semibold tracking-widest'>MRHHH ☃️</div>
      <div className=' text-lg ml-auto'>
          <Link href="/" className='ml-4 uppercase'>Home</Link>
          <Link href="/users" className='ml-4 uppercase'>Users</Link>
      </div>
    </div>
  )
}

export default Navbar