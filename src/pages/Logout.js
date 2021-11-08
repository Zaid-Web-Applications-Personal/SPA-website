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
const Logout = () => (
  <div>
    {
      isLoggedIn() && 
      <li>
        <p onClick={logout} ><NavLink exact to = "/" activeClassName="">Logout</NavLink></p>
      </li>
    }
  </div>
)
export default Logout;