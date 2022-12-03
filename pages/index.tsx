import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Users from '../components/Users'
import { Data, User } from '../models/User.model'
import styles from '../styles/Home.module.css'

export default function Home({ users }: Data) {
  return (
    <div className='p-4 px-8'>
      <Navbar />
      <Users users={users} />
    </div>
  )
}

export async function  getStaticProps() {
  const res = await fetch('http://localhost:3004/users')
  const data = await res.json()

  return {
    props: {users: data}
  }
}

