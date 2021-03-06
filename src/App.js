import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import "./style/style.css"

import Nav from './layout/Nav';
import {Login, Register, CreateAlbum, Album, Albums, CreateImage} from './pages'
class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      isAuth: sessionStorage.getItem("auth") === 'true'
    }
  }
  reload = () => {
    this.setState({
      isAuth: sessionStorage.getItem("auth") === 'true'
    })
  }
  render() {
    return (
      <Router>
        <Nav isAuth = {this.state.isAuth} reload = {this.reload} />
        <Switch>
          <Route path="/register"><Register reload = {this.reload}/></Route>
          {this.state.isAuth && <Route path="/create-album"><CreateAlbum reload = {this.reload}/></Route>}
          {this.state.isAuth && <Route path="/albums/:id/newImage" component={CreateImage}></Route>}
          {this.state.isAuth && <Route path="/albums/:id" component={Album}></Route>}
          {this.state.isAuth && <Route path="/albums"><Albums reload = {this.reload}/></Route>}
          {!this.state.isAuth && <Route path="/"><Login reload = {this.reload}/></Route>}
        </Switch>
      </Router>
    );
  }
}

export {App};

