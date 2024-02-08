import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import HomeLayout from "../../Layouts/HomeLayout";
import { getCourseLectures } from "../../Redux/Slices/LectureSlice";

function Displaylectures(){

const navigate=useNavigate();
const dispatch=useDispatch();
const {state}=useLocation();
const {lectures}=useSelector((state)=>state.lecture);
const {role}=useSelector((state)=>state.auth)

useEffect(()=>{
    console.log(state)
   if(!state) navigate("/courses")
   dispatch(getCourseLectures(state._id))
},[])

  return(
    <HomeLayout>
    <div className="flex flex-col gap-10 items-center justify-center min-h-[90vh] py-10 text-white mx-[5%]">
     <div className="text-center text-2xl font-semibold text-yellow-500">
        Course Name:{state?.title}
     </div>
    </div>
    </HomeLayout>
  )
}

export default Displaylectures;