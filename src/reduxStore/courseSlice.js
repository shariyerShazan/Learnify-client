import { createSlice } from "@reduxjs/toolkit";



const courseSlice = createSlice({
        name : "course" ,
        initialState: {
            adminCourses : [] ,
            singleCourse : null
        } ,
        reducers: {
            setAdminCourses: (state , action)=>{
                state.adminCourses = action.payload
            } ,
            setSingleCourse : (state , action)=>{
                state.singleCourse = action.payload
            }
        }
        
})

export const { setAdminCourses , setSingleCourse } = courseSlice.actions;
export default courseSlice.reducer;