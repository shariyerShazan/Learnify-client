// hooks/useGetSinglePurchesd.js
import { setSinglePurchased } from '@/reduxStore/courseSlice'
import { PURCHASE_API_END_POINT } from '@/utils/apiEndPoint'
import axios from 'axios'
import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useGetSinglePurchesd = (courseId) => {
  const dispatch = useDispatch()

  const fetchSinglePurchased = useCallback(async () => {
    try {
      const res = await axios.get(
        `${PURCHASE_API_END_POINT}/get-single-purchased/${courseId}`,
        { withCredentials: true }
      )
      if (res.data.success) {
        dispatch(setSinglePurchased(res.data.course)) 
      }
    } catch (error) {
      console.log(error)
    }
  }, [dispatch, courseId])

  useEffect(() => {
    fetchSinglePurchased()
  }, [fetchSinglePurchased])

  return { refetchSinglePurchased: fetchSinglePurchased }
}

export default useGetSinglePurchesd
