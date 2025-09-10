import { setSinglePurchased } from '@/reduxStore/courseSlice'
import { PURCHASE_API_END_POINT } from '@/utils/apiEndPoint'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const useGetSinglePurchesd = (courseId) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchSinglePurchased = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get(
        `${PURCHASE_API_END_POINT}/get-single-purchased/${courseId}`,
        { withCredentials: true }
      )
      if (res.data.success) {
        dispatch(setSinglePurchased(res.data.course))
      } else {
        setError("Course not found")
      }
    } catch (error) {
      console.log(error)
      dispatch(setSinglePurchased(null)) 
      setError(error.message || "Something went wrong")
      toast("You haven't purchased this course")
    } finally {
      setLoading(false)
    }
  }, [dispatch, courseId])

  useEffect(() => {
    fetchSinglePurchased()
  }, [fetchSinglePurchased])

  return { refetchSinglePurchased: fetchSinglePurchased, loading, error }
}

export default useGetSinglePurchesd
