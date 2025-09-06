import Navbar from '@/components/shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
