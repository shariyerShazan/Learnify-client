import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { setUser } from "@/reduxStore/userSlice"
import { toast } from "react-toastify"
import { USER_API_END_POINT } from "@/utils/apiEndPoint"
import axios from "axios"
import {
  User,
  BookOpen,
  LayoutDashboard,
  LogOut
} from "lucide-react"

const Navbar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/logout`,
        {},
        { withCredentials: true }
      )
      if (res.data.success) {
        toast.success(res.data.message)
        dispatch(setUser(null))
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className="border-b">
      <div className="w-[90%] mx-auto flex justify-between items-center py-3">
        <h2 className="text-2xl font-bold">
          Learni<span className="text-pink-500">fy</span>
        </h2>

        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src={user?.profilePicture || "/default-avatar.png"}
                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer border"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className={"cursor-pointer"}> 
                <User className="mr-2 h-4 w-4" /> My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className={"cursor-pointer"}>
                <BookOpen className="mr-2 h-4 w-4" /> My Courses
              </DropdownMenuItem>
              <DropdownMenuItem className={"cursor-pointer"}>
                <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-500 font-semibold cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}

export default Navbar
