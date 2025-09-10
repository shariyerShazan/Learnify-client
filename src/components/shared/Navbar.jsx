import React from "react"
import { useDispatch, useSelector } from "react-redux"
// import { Button } from "@/components/ui/button"
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
import { NavLink, useNavigate } from "react-router"
import { Button } from "../ui/button"

const Navbar = () => {
  const navigate = useNavigate()
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
        navigate("/login")
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
         {
          !user && <div className="flex gap-6 items-center">
          <NavLink  to={"/"} className={({ isActive }) => `hover:scale-102 cursor-pointer ${isActive ? "border-b-2 border-gray-950" : ""}`  }  >
                Home
              </NavLink>
              <NavLink  to={"/about"} className={({ isActive }) => `hover:scale-102 cursor-pointer ${isActive ? "border-b-2 border-gray-950" : ""}`  }  >
                About
              </NavLink>
          <Button onClick={()=>navigate("/login")} className={"cursor-pointer"}  >
          Login
         </Button>
         </div>
         }
        {user && (
          <div className="flex gap-6 items-center">
            <NavLink  to={"/"} className={({ isActive }) => `hover:scale-102 cursor-pointer ${isActive ? "border-b-2 border-gray-950" : ""}`  }  >
                Home
              </NavLink>
              <NavLink  to={"/about"} className={({ isActive }) => `hover:scale-102 cursor-pointer ${isActive ? "border-b-2 border-gray-950" : ""}`  }  >
                About
              </NavLink>
              <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <img
                src={user?.profilePicture}
                alt="profile"
                className="w-10 h-10 rounded-full cursor-pointer border object-cover"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>{user?.fullName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* user routes */}
               {
                user && <><DropdownMenuItem onClick={()=>navigate("/profile")} className={"cursor-pointer"}> 
                <User className="mr-2 h-4 w-4" /> My Profile
              </DropdownMenuItem>
                   {
                    user && user.role === 'student' &&  <DropdownMenuItem onClick={()=>navigate("/my-courses")} className={"cursor-pointer"}>
                    <BookOpen  className="mr-2 h-4 w-4" /> My Courses
                  </DropdownMenuItem>
                   }
              </> 
               }

               {/* instructor routes */}
             { user && user.role === "instructor" && 
               <DropdownMenuItem onClick={()=>navigate("/dashboard/preview")} className={"cursor-pointer"}>
               <LayoutDashboard className="mr-2 h-4 w-4" /> Dashboard
             </DropdownMenuItem>
             }
                          <DropdownMenuSeparator />
            
              <DropdownMenuItem
                onClick={handleLogout}
                className="text-red-500 font-semibold cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
