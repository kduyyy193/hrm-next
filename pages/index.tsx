import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AddUser from '../components/AddUser'
import NotifiModal from '../components/NotifiModal'

export default function Home() {
  const [showAddUser, setShowAddUser] = useState(false)
  const [showNotifiModal, setShowNotifiModal] = useState(false)
  return (
    <div className='p-4 px-8'>
      <h2 className='text-center mt-20 text-2xl font-semibold'>ADC Mang Đến Sự Tốt Lành...</h2>
      <h2 className='text-center px-4 bg-blue-400 py-2 w-48 rounded-lg  absolute mx-auto right-0 left-0 top-1/2 hover:cursor-pointer hover:opacity-80' onClick={() => { setShowAddUser(true) }}>Add New Menber </h2>
      {
        showAddUser && <AddUser setShowAddUser={setShowAddUser} setShowNotifiModal={setShowNotifiModal} />
      } {

        showNotifiModal && <NotifiModal top="top-6" />
      }
    </div>
  )

}
