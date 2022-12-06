import { InferGetStaticPropsType } from 'next'
import React from 'react'
import UsersComponent from '../../components/Users'

const UsersPage = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
        <UsersComponent users={users} />
    </>
  )
}

export default UsersPage


export async function  getStaticProps() {
    const res = await fetch('http://localhost:3004/users')
    const data = await res.json()
  
    return {
      props: {users: data}
    }
  }
  