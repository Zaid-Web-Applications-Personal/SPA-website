import React from "react";
import {
  NavLink
} from "react-router-dom"

function isLoggedIn(){
  if(sessionStorage.getItem("auth") === 'true')
  {
    return true;
  }
  return false;
}
const RegisterButton = () => (
  <div>
    {
      !isLoggedIn() && 
      <li>
        <NavLink exact to = "/" activeClassName="">Login</NavLink>
      </li>
    }
    {
      !isLoggedIn() && 
      <li>
        <NavLink exact to = "/register" activeClassName="">Register</NavLink>
      </li>
    }
  </div>
)
export default RegisterButton;