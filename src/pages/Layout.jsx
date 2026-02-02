import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* Fixed Navbar */}
      <Navbar />

      {/* Only this part changes */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

    </div>
  )
}

export default Layout
