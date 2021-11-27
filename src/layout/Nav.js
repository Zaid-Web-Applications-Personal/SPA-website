import React from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import {
  NavLink
} from "react-router-dom"
import { Post } from "../API/CallAPI";
import {ENDPOINTS} from '../API/Endpoints'

const navs = [
  {path: '/contact', name: 'Contact'},
  {path: '/about', name: 'About'},
]


export default class MainNav extends React.Component{
  constructor(props)
  {
    super(props)
    console.log(this.props)
    this.state = {
      isAuth : this.props.isAuth
    }
    this.logout = this.logout.bind(this)
  }

  componentDidUpdate(prevProps) {
    if(prevProps !== this.props)
    {
      this.setState({isAuth: this.props.isAuth});
    }
  }

  async logout(e){
    e.preventDefault();
    const data = Post(ENDPOINTS.LOGOUT);
    window.sessionStorage.setItem("token", data.token)
    window.sessionStorage.setItem("auth", data.auth)
    console.log(this.props)
    this.props.reload();
  }

  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>The Better Pintrest</Navbar.Brand>
          <Nav className="me-auto">
            {
              this.state.isAuth &&
              <Nav.Link href="">
                <NavLink exact to = "/home" activeClassName="">Home</NavLink>
              </Nav.Link>
            }
            {
            navs.map(navItem => (
              <Nav.Link href="">
                <NavLink exact to = {navItem.path} activeClassName="">{navItem.name}</NavLink>
              </Nav.Link>
              ))
            }
          </Nav>
          {
            !this.state.isAuth ? (
              <Nav>
                <Nav.Link>
                  <NavLink exact to = "/login" activeClassName="">Login</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink exact to = "/register" activeClassName="">Register</NavLink>
                </Nav.Link>
              </Nav>
            ) 
            : (
              <Nav>
                <Nav.Link>
                  <p onClick={this.logout} ><NavLink exact to = "/" activeClassName="">Logout</NavLink></p>
                </Nav.Link>
                <Nav.Link>
                  <NavLink exact to = "/albums" activeClassName="">Albums</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink exact to = "/create-album" activeClassName="">New Album</NavLink>
                </Nav.Link>
              </Nav>
            )
          }
        </Container>
      </Navbar>
    )
  }
}