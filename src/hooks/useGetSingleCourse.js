import { setSingleCourse } from '@/reduxStore/courseSlice';
import { COURSE_API_END_POINT } from '@/utils/apiEndPoint';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

export const useGetSingleCourse = (courseId) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSingleCourse = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${COURSE_API_END_POINT}/single-course/${courseId}`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setSingleCourse(res.data.course));
      } else {
        setError("Failed to fetch course");
      }
    } catch (err) {
      console.log(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [dispatch, courseId]);

  useEffect(() => {
    fetchSingleCourse();
  }, [fetchSingleCourse]);

  return { refetchSingleCourse: fetchSingleCourse, loading, error };
};

