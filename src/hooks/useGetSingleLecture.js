import { setSingleLecture } from '@/reduxStore/courseSlice'
import { LECTURE_API_END_POINT } from '@/utils/apiEndPoint'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

export const useGetSingleLecture = (lectureId) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchSingleLecture = useCallback(async () => {
    if (!lectureId) return 

    setLoading(true)
    setError(null)
    try {
      const res = await axios.get(
        `${LECTURE_API_END_POINT}/single-lecture/${lectureId}`,
        { withCredentials: true }
      )

      if (res.data.success) {
        dispatch(setSingleLecture(res.data.lecture))
      } else {
        setError("Failed to fetch lecture")
      }
    } catch (err) {
      console.error(err)
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }, [dispatch, lectureId])

  useEffect(() => {
    fetchSingleLecture()
  }, [fetchSingleLecture])

  return { refetchSingleLecture: fetchSingleLecture, loading, error }
}
