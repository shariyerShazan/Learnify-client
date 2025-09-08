import { setUser } from "@/reduxStore/userSlice"
import { USER_API_END_POINT } from "@/utils/apiEndPoint"
import axios from "axios"
import { useEffect, useCallback } from "react"
import { useDispatch } from "react-redux"

export const useGetUser = ({ reCall = false } = {}) => {
    const dispatch = useDispatch()

    const fetchUser = useCallback(async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/get-user`, { withCredentials: true })
            if (res.data.success) {
                dispatch(setUser(res.data.user))
            }
        } catch (error) {
            console.log(error)
        }
    }, [dispatch])

    useEffect(() => {
        fetchUser()
    }, [fetchUser, reCall])

    return { refetchUser: fetchUser }
}
