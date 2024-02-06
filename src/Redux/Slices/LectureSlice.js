import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import toast from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";

const initialState={
    lectures:[]
}

export const getCourseLectures=createAsyncThunk("/course/lecture/get",async(cid)=>{
    try{
         const response=axiosInstance.get(`/course/${cid}`)
         toast.promise(response,{
            loading:"Fetching Course lectures",
            success:"Lectures fetched successfully",
            error:"Failed to load the lectures"
         })
         return (await response).data
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})

export const addCourseLecture=createAsyncThunk("/course/lecture/add",async(data)=>{
    try{
        const formData=new FormData();
        formData.append("lecture",data.lecture)
        formData.append("title",data.title)
        formData.append("description",data.description)

         const response=axiosInstance.post(`/course/${data.id}`,formData)
         toast.promise(response,{
            loading:"Adding Course lectures",
            success:"Lecture added successfully",
            error:"Failed to load the lectures"
         })
         return (await response).data
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})

export const deleteCourseLecture=createAsyncThunk("/course/lecture/delete",async(data)=>{
    try{
         const response=axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`)
         toast.promise(response,{
            loading:"Deleting Course lectures",
            success:"Lecture deleted successfully",
            error:"Failed to delete the lectures"
         })
         return (await response).data
    }catch(error){
        toast.error(error?.response?.data?.message)
    }
})

const lectureSlice=createSlice({
    name:"lecture",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCourseLectures.fulfilled,(state,action)=>{
            console.log(action)
            state.lectures=action?.payload?.lectures;
        })
        .addCase(addCourseLecture.fulfilled,(state,action)=>{
            console.log(action)
            state.lectures = action?.payload?.course?.lectures;        
        })
    }
});

export default lectureSlice.reducer