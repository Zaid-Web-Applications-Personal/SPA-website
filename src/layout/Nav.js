import React from "react";
import {Get} from '../API/CallAPI'
import {ENDPOINTS} from '../API/Endpoints'

import {
  NavLink
} from "react-router-dom"

const navs = [
  {path: '/contact', name: 'Contact'},
  {path: '/about', name: 'About'},
]

const logout = async e => {
  e.preventDefault();
  const data = Get(ENDPOINTS.LOGOUT);
  window.sessionStorage.setItem("token", data.token)
  window.sessionStorage.setItem("auth", data.auth)
}

function isLoggedIn(){
  if(sessionStorage.getItem("auth") === 'true')
  {
    return true;
  }
  return false;
}

const Nav = () => (
  <nav>
    <ul>
      {
        sessionStorage.getItem("auth") && 
        <li>
          <NavLink exact to = "/home" activeClassName="">Home</NavLink>
        </li>
      }
      {navs.map(navItem => (
          <li>
            <NavLink exact to = {navItem.path} activeClassName="">{navItem.name}</NavLink>
          </li>
        ))
      }
    </ul>
  </nav>
)

export default Nav;