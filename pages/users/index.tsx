import { InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import React from 'react'
import UsersComponent from '../../components/Users'

const UsersPage = ({ users }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='p-4 px-8'>
      <Head>
        <title>Menbers</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UsersComponent users={users} />
    </div>
  )
}

export default UsersPage


export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT!)
  const data = await res.json()

  return {
    props: { users: data }
  }
}
