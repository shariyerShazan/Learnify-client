import { createSlice } from "@reduxjs/toolkit";



const courseSlice = createSlice({
        name : "course" ,
        initialState: {
            adminCourses : [] ,
            singleCourse : null,
            singleLecture : null
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
        }
        
})

export const { setAdminCourses , setSingleCourse  , setSingleLecture} = courseSlice.actions;
export default courseSlice.reducer;