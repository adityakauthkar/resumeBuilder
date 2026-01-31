import { Outdent } from 'lucide-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Dashboard from './Dashboard'

const Layout = () => {
  return (
    <div>

      <div className='min-h-screen bg-gray-50'>
        <Navbar/>
        <Dashboard/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout