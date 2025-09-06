import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
  const {user} = useSelector((state)=>state.user)
  return (
    <div>
      {console.log(user)}
      {user.fullName}
    </div>
  )
}

export default Home
