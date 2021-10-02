import React from 'react'
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Typography } from '@material-ui/core'
import Filter from "./components/Filter"
import Login from "./components/accountpages/Login"
import Home from "./components/accountpages/Home"
import Register from "./components/accountpages/Register"
import {withRouther, BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="container">
      <Header/>
      </div>
      <Route path="/home" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/Register" component={Register}/>
    </Router>
  );
}

export default App;
