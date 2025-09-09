import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {

  return (
    <div>
      <Navbar />
        <div className='w-[90%] mx-auto min-h-[70vh]'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout
