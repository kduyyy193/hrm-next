import { InferGetStaticPropsType } from 'next'
import React from 'react'
import UsersComponent from '../../components/Users'

const UsersPage = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='p-4 px-8'>
        <UsersComponent users={users} />
    </div>
  )
}

export default UsersPage


export async function  getStaticProps() {
    const res = await fetch('https://hrm-api-nodejs.onrender.com/users')
    const data = await res.json()
  
    return {
      props: {users: data}
    }
  }
  