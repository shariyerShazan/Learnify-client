import React, { useRef, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Plus } from 'lucide-react'
import { Card } from '@/components/ui/card'

const Profile = () => {
  const imageRef = useRef()
  const [preview, setPreview] = useState(null)

  const imageSelect = () => {
    // file input trigger
    imageRef.current.click()
  }

  const handleChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result) // preview state update
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className='p-4'>
      <h2 className='text-xl font-bold mt-6'>PROFILE</h2>
     <Card className={"mt-6"}>
     <form>
        <div 
          onClick={imageSelect} 
          className="w-42 h-42 rounded-full relative group cursor-pointer"
        >
          <Avatar className='w-full h-full'>
            <AvatarImage 
              className="w-full h-full rounded-full group-hover:opacity-50" 
              src={preview || "https://github.com/shadcn.png"} 
              alt="@shadcn" 
            />
            <AvatarFallback className="w-full h-full rounded-full">DP</AvatarFallback>    
          </Avatar>
          <Plus size={30} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-gray-700' />
        </div>

        <input 
          ref={imageRef} 
          type="file" 
          className="hidden" 
          onChange={handleChange} 
          accept="image/*"
        />
      </form>
     </Card>
    </div>
  )
}

export default Profile
