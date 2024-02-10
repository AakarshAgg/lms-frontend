import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/AuthSlice"
import courseSliceReducer from "./Slices/CourseSlice"
import LectureSlice from "./Slices/LectureSlice";
import razorpaySliceReducer from "./Slices/RazorpaySlice"

const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        course:courseSliceReducer,
        razorpay:razorpaySliceReducer,
        lecture:LectureSlice
    },
    devTools:true
})

export default store;