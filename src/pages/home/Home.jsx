import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>Home
        <Outlet></Outlet>
    </div>
  )
}

export default Home
