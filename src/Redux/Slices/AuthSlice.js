import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance";


const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn") || false,
    role:localStorage.getItem("role") || "",
    data:JSON.parse(localStorage.getItem("data"))|| {}
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
    });

    //getting response resolved here
    res=await res;
    return res.data;
 } catch (error) {
    toast.error(error?.response?.data?.message);
 }
})

export const login=createAsyncThunk("/auth/login",async(data)=>{
 try {
    let res=axiosInstance.post("user/login",data)
    toast.promise(res,{
        loading:"Wait! authentication in progress",
        success:(data)=>{
            return data?.data?.message;
        },
        error:"Failed to login"
    })

    //getting response resolved here
    res=await res;
    return res.data;
 } catch (error) {
    toast.error(error?.response?.data?.message);
 }
})

export const logout=createAsyncThunk("/auth/logout",async()=>{
    try {
        let res=axiosInstance.get("user/logout")
        toast.promise(res,{
            loading:"Wait! Logout in progress ...",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to logout"
        })
        //getting response resolved here
        res=await res;
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const updateProfile=createAsyncThunk("/user/update/profile",async(data)=>{
    try {
        let res=axiosInstance.put(`user/update/${data[0]}`,data[1])
        toast.promise(res,{
            loading:"Wait! profile update in progress ...",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to update profile"
        })
        //getting response resolved here
        res=await res;
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})

export const getUserData=createAsyncThunk("/user/details",async()=>{
    try {
        let res=axiosInstance.get("user/me")
        //getting response resolved here
        res=await res;
        return res.data;
    } catch (error) {
        toast.error(error.message)
    }
})

//function to change password
export const changePassword=createAsyncThunk("/auth/changePassword",async(userPassword)=>{
    try {
        let res=axiosInstance.post("/user/change-password",userPassword);
        await toast.promise(res,{
            loading:"Loading...",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to change password"
        });
    // getting response resolved here
    res = await res;
    return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
}
);

//function to handle forget password

export const forgetPassword=createAsyncThunk("auth/forgetPassword",async(email)=>{
    try {
     let res=axiosInstance.post("/user/reset",{email})   ;
     console.log("res",res)
    await toast.promise(res,{
        loading:"Loading...",
        success:(data)=>{
            return data?.data?.message;
        },
        error:"Failed to send verification email"
    });
    
      // getting response resolved here
      res = await res;
      console.log("res",res)
      return res.data;

    } catch (error) {
        toast.error(error?.response?.data?.message);  
    }
})

//function to reset the password
export const resetPassword=createAsyncThunk("/user/reset",async(data)=>{
    try {
        let res=axiosInstance.post(`/user/reset/${data.resetToken}`,{
            password:data.password
        })
        toast.promise(res,{
            loading:"Resetting...",
            success:(data)=>{
                return data?.data?.message;
            },
            error:"Failed to reset password"
        });
        //getting response resolved here
        res=await res;
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
});


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(login.fulfilled,(state,action)=>{
            console.log(action)
            localStorage.setItem("data",JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role)
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role
        })
        .addCase(logout.fulfilled,(state)=>{
            localStorage.clear();
            state.data={};
            state.isLoggedIn=false;
            state.role="";
        })
        .addCase(getUserData.fulfilled,(state,action)=>{
            localStorage.setItem("data",JSON.stringify(action?.payload?.user))
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("role",action?.payload?.user?.role)
            state.isLoggedIn=true;
            state.data=action?.payload?.user;
            state.role=action?.payload?.user?.role
        })
    }
})

//export const {} = authSlice.actions
export default authSlice.reducer