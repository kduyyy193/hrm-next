import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export type ChildLayout = {
    children: React.ReactNode
}

const Layout = ({children}: ChildLayout) => {
  return (
    <div className='p-4 px-8 h-screen flex flex-col'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
