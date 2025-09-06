import React, { useRef, useState, useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user } = useSelector((state) => state.user) 
  const imageRef = useRef()
  const [formData, setFormData] = useState({
    fullName: '',
    role: '',
    avatar: ''
  })
  const [preview, setPreview] = useState(null)
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        // role: user.role,
        avatar: user.avatar || "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small_2x/default-avatar-icon-of-social-media-user-vector.jpg"
      })
      setPreview(user.avatar || null)
    }
  }, [user])

  // Handle avatar click
  const imageSelect = () => {
    imageRef.current.click()
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        setIsChanged(true) 
      }
      reader.readAsDataURL(file)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setIsChanged(true)
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    console.log('Updated Data:', formData, preview)
    setIsChanged(false) 
  }

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mt-6'>PROFILE</h2>
      <Card className="mt-6 p-4">
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">
          <div className="flex flex-col items-center">
            <div 
              onClick={imageSelect} 
              className="w-40 h-40 rounded-full relative group cursor-pointer"
            >
              <Avatar className='w-full h-full'>
                <AvatarImage 
                  className="w-full h-full rounded-full group-hover:opacity-50" 
                  src={preview || formData.avatar} 
                  alt="@avatar" 
                />
                <AvatarFallback className="w-full h-full rounded-full">DP</AvatarFallback>    
              </Avatar>
              <Plus size={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-gray-700' />
            </div>
            <input 
              ref={imageRef} 
              type="file" 
              className="hidden" 
              onChange={handleImageChange} 
              accept="image/*"
            />
          </div>

          {/* Name */}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="border p-2 rounded w-full"
            value={formData.fullName}
            onChange={handleInputChange}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded w-full"
            value={formData.email}
            // onChange={handleInputChange}
          />

          {/* Role */}
          <select
            name="role"
            className="border p-2 rounded w-full"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>

          {/* Update Button */}
          <button
            type="submit"
            disabled={!isChanged}
            className={`bg-blue-500 text-white p-2 rounded w-full ${
              !isChanged ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
            }`}
          >
            Update
          </button>
        </form>
      </Card>
    </div>
  )
}

export default Profile
