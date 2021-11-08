import React from "react";

import {
  NavLink
} from "react-router-dom"

const navs = [
  {path: '/contact', name: 'Contact'},
  {path: '/about', name: 'About'},
]

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