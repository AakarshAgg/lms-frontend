import './App.css'

import { Route,Routes } from 'react-router-dom'

import NotRequireAuth from './Components/Auth/NotRequireAuth'
import RequiredAuth from './Components/Auth/RequireAuth'
import ChangePassword from './Components/Password/ChangePassword'
import ForgetPassword from './Components/Password/ForgetPassword'
import ResetPassword from './Components/Password/ResetPassword'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import CourseDescription from './Pages/Course/CourseDescription'
import CourseList from './Pages/Course/CourseList'
import CreateCourse from './Pages/Course/CreateCourse'
import AddLecture from './Pages/Dashboard/Addlecture'
import AdminDashboard from './Pages/Dashboard/AdminDashboard'
import Displaylectures from './Pages/Dashboard/Displaylectures'
import Denied from './Pages/Denied'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Checkout from './Pages/Payment/Checkout'
import CheckoutFailure from './Pages/Payment/CheckoutFailure'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess'
import Signup from './Pages/Signup'
import EditProfile from './Pages/User/EditProfile'
import Profile from './Pages/User/Profile'


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route> 
      <Route path="/about" element={<AboutUs/>}></Route> 
      <Route path="/courses" element={<CourseList/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/denied' element={<Denied/>}></Route>
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      <Route path="/reset-password/:resetToken" element={<ResetPassword />} />

      <Route path="/course/description" element={<CourseDescription/>}/>

<Route element={<NotRequireAuth/>}>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Route>
      
      <Route element={<RequiredAuth allowedRoles={["ADMIN"]}/>}>
        <Route path="/course/create" element={<CreateCourse/>} />
      <Route path="/course/addlecture" element={<AddLecture/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      </Route>

      <Route element={<RequiredAuth allowedRoles={["ADMIN","USER"]}/>} >
       <Route path="/user/profile" element={<Profile/>}/>
       <Route path="/user/editprofile" element={<EditProfile/>}/>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/checkout/success" element={<CheckoutSuccess/>}></Route>
      <Route path="/checkout/fail" element={<CheckoutFailure/>}></Route>
      <Route path="/changepassword" element={<ChangePassword />}></Route>
      <Route path='/course/displaylectures' element={<Displaylectures/>}></Route>
      </Route>

      <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
