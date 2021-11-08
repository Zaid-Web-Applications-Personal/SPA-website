import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"


import { Nav } from "./layout";
import {Home, About, Contact, Login, Register} from './pages'

const IfTrue = function(boolean)
{
  if(sessionStorage.getItem("auth") === 'true')
  {
    return (<Route path="/home"><Home/></Route>)
  }
  return <div><Route path="/"><Login/></Route></div>
}
const Reload = function()
{
  window.location.reload(false)
}

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/register"><Register/></Route>
        <IfTrue/>
      </Switch>
    </Router>
  );
}

export {App, Reload};

