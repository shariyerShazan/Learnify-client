import { setUser } from "@/reduxStore/userSlice"
import { USER_API_END_POINT } from "@/utils/apiEndPoint"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useGetUser =  ({reCall= false})=>{
    const dispatch = useDispatch()
    useEffect(()=>{
         const fetchUser = async ()=>{
             try {
                 const res = await axios.get(`${USER_API_END_POINT}/get-user` , {withCredentials: true})
                 if(res.data.sucess){
                    dispatch(setUser(res.data.user))
                 }
             } catch (error) {
                console.log(error)
             }
         }
         fetchUser()
    }, [dispatch , reCall])
}