import { createSlice } from "@reduxjs/toolkit";



const courseSlice = createSlice({
        name : "course" ,
        initialState: {
            adminCourses : [] ,
            singleCourse : null,
            singleLecture : null ,
            publishedCourses : [] ,
            purchasedCourse : []
        } ,
      
        reducers: {
            setAdminCourses: (state , action)=>{
                state.adminCourses = action.payload
            } ,
            setSingleCourse : (state , action)=>{
                state.singleCourse = action.payload
            },
            setSingleLecture: (state , action)=>{
                state.singleLecture = action.payload
            },
            setPublishedCourses : (state , action)=>{
                state.publishedCourses = action.payload
            } ,
            setPurchasedCourse : (state , action)=>{
                state.purchasedCourse = action.payload
            }
        }
        
})

export const { setAdminCourses , setSingleCourse  , setSingleLecture , setPublishedCourses , setPurchasedCourse} = courseSlice.actions;
export default courseSlice.reducer;