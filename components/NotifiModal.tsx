import React from 'react'


const NotifiModal = ({ top }: any) => {
  return (
    <div className={`absolute text-center ${top} left-0 right-0  mx-auto w-64`}>
        <div className='notifi px-8 py-2 rounded-lg  bg-green-600 animate-bounce'>
            Successfully!!!!
    </div>
    </div>
  )
}

export default NotifiModal
