import './App.css'

import { Route,Routes } from 'react-router-dom'

import RequiredAuth from './Components/Auth/RequireAuth'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import CourseDescription from './Pages/Course/CourseDescription'
import CourseList from './Pages/Course/CourseList'
import CreateCourse from './Pages/Course/CreateCourse'
import Displaylectures from './Pages/Dashboard/Displaylectures'
import Denied from './Pages/Denied'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Checkout from './Pages/Payment/Checkout'
import Signup from './Pages/Signup'
import EditProfile from './Pages/User/EditProfile'
import Profile from './Pages/User/Profile'
import CheckoutSuccess from './Pages/Payment/CheckoutSuccess'


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route> 
      <Route path="/about" element={<AboutUs/>}></Route> 
      <Route path="/courses" element={<CourseList/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/denied' element={<Denied/>}></Route>

      <Route path="/course/description" element={<CourseDescription/>}/>

      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>

      <Route element={<RequiredAuth allowedRoles={["ADMIN"]}/>}>
        <Route path="/course/create" element={<CreateCourse/>} />
      </Route>

      <Route element={<RequiredAuth allowedRoles={["ADMIN","USER"]}/>} >
       <Route path="/user/profile" element={<Profile/>}/>
       <Route path="/user/editprofile" element={<EditProfile/>}/>
      <Route path='/course/displaylecture' element={<Displaylectures/>}></Route>
      <Route path="/checkout" element={<Checkout/>}></Route>
      <Route path="/checkout/success" element={<CheckoutSuccess/>}></Route>
      </Route>

      <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
