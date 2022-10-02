import React from 'react'
import { Link } from '../'

const Header = () => {
  return (
    <nav className="bg-white py-4">
      <div className="container px-4 mx-auto flex items-center">
        <div className="flex justify-between items-center">
          <Link path='/' name="UMS" className='font-bold text-xl text-blue-700 bg-transparent ' />
        </div>
        <div className="flex ml-auto justify-around" id="navbar-collapse">
          <Link path='/' name="create user" />
          <Link path='/user/list' name="list users" /> 
        </div>
      </div>
    </nav>
  )
}

export default Header