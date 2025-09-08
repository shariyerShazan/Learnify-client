import { createSlice } from "@reduxjs/toolkit";



const courseSlice = createSlice({
        name : "course" ,
        initialState: {
            adminCourses : []
        } ,
        reducers: {
            setAdminCourses: (state , action)=>{
                state.adminCourses = action.payload
            }
        }
        
})

export const { setAdminCourses } = courseSlice.actions;
export default courseSlice.reducer;