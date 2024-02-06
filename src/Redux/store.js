import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/AuthSlice"
import courseSliceReducer from "./Slices/CourseSlice"
import LectureSlice from "./Slices/LectureSlice";

const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSliceReducer,
        lecture:LectureSlice
    },
    devTools:true
})

export default store;