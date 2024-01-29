import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";


const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn") || false,
    role:localStorage.getItem("role") || "",
    data:localStorage.getItem("data")|| {}
}

//What is Redux thunk
//The word "thunk" is a programming term that means "a piece of code that does some delayed work"
//A logical concept in programming where you deal with a function that is primarily used to dekay the calculation or evaluation of any operation.

//createasyncthunk

export const createAccount=createAsyncThunk("/auth/signup",async(data)=>{
 try {
    let res=axiosInstance.post("user/register",data)
    toast.promise(res,{
        loading:"Wait! creating your account",
        success:(data)=>{
            return data?.data?.message;
        },
        error:"Failed to create account"
    })

    //getting response resolved here
    res=await res;
    return res.data;
 } catch (error) {
    toast.error(error?.response?.data?.message);
 }
})

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{}
})

//export default {} = authSlice.actions
export default authSlice.reducer