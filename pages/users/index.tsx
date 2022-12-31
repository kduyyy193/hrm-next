import { InferGetStaticPropsType } from 'next'
import React from 'react'
import UsersComponent from '../../components/Users'

export const url_api = process.env.NEXT_PUBLIC_API_ENDPOINT

const UsersPage = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='p-4 px-8'>
        <UsersComponent users={users} />
    </div>
  )
}

export default UsersPage


export async function  getStaticProps() {
    const res = await fetch(url_api!)
    const data = await res.json()
  
    return {
      props: {users: data}
    }
  }
  