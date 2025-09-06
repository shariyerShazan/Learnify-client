import Navbar from '@/components/shared/Navbar'
import { useGetUser } from '@/hooks/useGetUser'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  const [reCall , setReCall] = useState(false)
  useEffect(()=>{
        setReCall(true)
  }, [])
  useGetUser({reCall})
  return (
    <div>
      <Navbar />
        <div className='w-[90%] mx-auto'>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout
