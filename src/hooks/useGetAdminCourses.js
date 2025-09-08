import { setAdminCourses } from '@/reduxStore/courseSlice'
import { COURSE_API_END_POINT } from '@/utils/apiEndPoint'
import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetAdminCourses = () => {
    const dispatch = useDispatch()
        const fetchAdminCourses = useCallback( async ()=>{
            try {
                const res = await axios.get(`${COURSE_API_END_POINT}/admin-courses` , {withCredentials: true})
                if(res.data.success){
                    dispatch(setAdminCourses(res.data.courses))
                }
            } catch (error) {
                console.log(error)
                dispatch(setAdminCourses(error.response.data.courses))
            }
        }, [dispatch] )

        useEffect(()=>{
            fetchAdminCourses()
        } , [fetchAdminCourses])
        return { refetchCourses: fetchAdminCourses}
}



