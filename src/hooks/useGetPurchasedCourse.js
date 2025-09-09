
import { setPurchasedCourse } from '@/reduxStore/courseSlice'
import { PURCHASE_API_END_POINT } from '@/utils/apiEndPoint'
import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

export const useGetPurchasedCourse = () => {
    const dispatch = useDispatch()
      const  fetchPurchasedCourse = useCallback(async ()=>{
        try {
         const res = await axios.get(`${PURCHASE_API_END_POINT}/get-purchased` , {withCredentials: true})
         if(res.data.success){
             dispatch(setPurchasedCourse(res.data.courses))
         }
        } catch (error) {
          console.log(error)
        }
   } , [dispatch])
   useEffect(()=>{
    fetchPurchasedCourse()
   }, [fetchPurchasedCourse])
   return { refetchPurchasedCourse : fetchPurchasedCourse}
}


