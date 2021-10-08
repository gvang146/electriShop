import React from 'react'
import './App.css';
import Header from './components/Header'
import { Typography } from '@material-ui/core'
import Login from "./components/accountpages/Login"
import Dashboard from "./components/accountpages/Dashboard"
import Register from "./components/accountpages/Register"
import ForgotPass from "./components/accountpages/ForgotPass";
import {withRouther, BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="container">
    <Header/>
      </div>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/forgotPass" component={ForgotPass}/>
    </Router>
  );
}

export default App;
