import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";


//allowedRoles is an array
function RequiredAuth({allowedRoles}){
  const {isLoggedIn,role}=useSelector((state)=>state.auth);

//check if user loggedin and role is allowed the he can access otherwise go to denied page or go to loginn page if not logged ig 
   return isLoggedIn && allowedRoles.find((myRole)=>myRole== role)?(
    <Outlet/>
   ):isLoggedIn?(<Navigate to="/denied"/>):(<Navigate to="/login"/>)

}

export default RequiredAuth