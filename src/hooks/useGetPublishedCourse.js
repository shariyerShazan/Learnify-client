import { setPublishedCourses } from '@/reduxStore/courseSlice';
import { COURSE_API_END_POINT } from '@/utils/apiEndPoint';
import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const useGetPublishedCourse = () => {
  const dispatch = useDispatch();

  const fetchPublishedCourse = useCallback(async () => {
    try {
      const res = await axios.get(
        `${COURSE_API_END_POINT}/published-course`,
        { withCredentials: true }
      );

      if (res.data.success) {
        dispatch(setPublishedCourses(res.data.courses));
      }
    } catch (error) {
      console.error("Failed to fetch published courses:", error.response?.data || error.message);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPublishedCourse();
  }, [fetchPublishedCourse]);

  return { refetchPublishedCourses: fetchPublishedCourse };
};
