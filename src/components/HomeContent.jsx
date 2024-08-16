import React from 'react'
import { Link } from 'react-router-dom'

const HomeContent = () => {
  return (
    <div className='flex  flex-col justify-center items-center h-screen'>
      <h2 className='text-3xl font-extrabold text-blue-600'>If You Want to Show Our Products, So you need to Log in First.</h2>
      <div className='flex flex-col justify-center mt-10'>
            <Link to='/login' className='btn bg-blue-500 hover:bg-blue-800 px-5  text-white text-xl'>Log In Now</Link>
        </div>
    </div>
  )
}

export default HomeContent