import React from "react";
import {
  NavLink
} from "react-router-dom"
import {Get} from '../API/CallAPI'
import {ENDPOINTS} from '../API/Endpoints'

function isLoggedIn(){
  if(sessionStorage.getItem("auth") === 'true')
  {
    return true;
  }
  return false;
}
const logout = async e => {
  e.preventDefault();
  const data = Get(ENDPOINTS.LOGOUT);
  window.sessionStorage.setItem("token", data.token)
  window.sessionStorage.setItem("auth", data.auth)
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