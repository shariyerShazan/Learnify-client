import React, { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Loader2, Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import ProfileSkeleton from '@/components/skeletons/ProfileSkeleton'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/apiEndPoint'
import { toast } from 'react-toastify'
import { useGetUser } from '@/hooks/useGetUser'

const Profile = () => {
  const { user } = useSelector((state) => state.user)
  const imageRef = useRef()
  const [loading, setLoading] = useState(true)
  const [btnLoading, setBtnLoading] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    profilePicture: ''
  })
  const [preview, setPreview] = useState(null)
  const [isChanged, setIsChanged] = useState(false)

  const { refetchUser } = useGetUser() 


  // Load user data
  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        profilePicture: user.profilePicture 
      })
      setPreview(user.profilePicture || null)
    }
    
  }, [user])

  setTimeout(() => {
    setLoading(false)
  }, 1000);

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

  const handleUpdate = async (e) => {
    e.preventDefault()
    setBtnLoading(true)
    const updatedData = new FormData()
    updatedData.append("fullName", formData.fullName)

    if (imageRef.current.files[0]) {
      updatedData.append("profilePicture", imageRef.current.files[0])
    }

    try {
      const res = await axios.patch(
        `${USER_API_END_POINT}/update-user`,
        updatedData,
        { withCredentials: true }
      )

      if(res.data.success){
        toast.success(res.data.message)
        setIsChanged(false)
        refetchUser() 
        setBtnLoading(false)
      }
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong!")
      setBtnLoading(false)
    }
  }

  if (loading) return <ProfileSkeleton />

  return (
    <div className='p-4 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Profile</h2>
      <Card className="p-6 shadow-lg rounded-lg">
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          {/* Avatar */}
          <div className="flex flex-col items-center">
            <div 
              onClick={imageSelect} 
              className="w-40 h-40 rounded-full relative group cursor-pointer"
            >
              <Avatar className='w-full h-full'>
                <AvatarImage 
                  className="w-full h-full rounded-full group-hover:opacity-70 transition-opacity duration-300 object-cover" 
                  src={preview || formData.profilePicture} 
                  alt="@avatar" 
                />
                <AvatarFallback className="w-full h-full rounded-full ">DP</AvatarFallback>    
              </Avatar>
              <Plus size={28} className='absolute top-1/2 hidden group-hover:block left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-600' />
            </div>
            <input 
              ref={imageRef} 
              type="file" 
              className="hidden" 
              onChange={handleImageChange} 
              accept="image/*"
            />
          </div>

          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <Label htmlFor="fullName">Full Name: </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          {/* Email (read-only) */}
          <div className="flex flex-col gap-1">
            <Label>Email: </Label>
            <Input value={user.email} readOnly className="cursor-not-allowed bg-gray-100" />
          </div>

          {/* Role (read-only) */}
          <div className="flex flex-col gap-1">
            <Label>Role: </Label>
            <Input value={user.role} readOnly className="cursor-not-allowed bg-gray-100" />
          </div>
          
          {/* Update Button */}
         {
          btnLoading ?  <Button className="w-full mt-2 cursor-pointer">
             <Loader2 className='animate-spin'/>Please wait...
       </Button>:
        <Button type="submit" disabled={!isChanged} className="w-full mt-2 cursor-pointer">
        {isChanged ? "Update" : "Profile"}
     </Button>


         }
        </form>
      </Card>
    </div>
  )
}

export default Profile
