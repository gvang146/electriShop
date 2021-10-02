import React from 'react'
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Typography } from '@material-ui/core'
import Filter from "./components/Filter"
import Login from "./components/accountpages/Login"
import {withRouther, BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="container">
      <Header/>
      <div className="top-section">
        <NavBar />
      </div>
      <Route path="/login" component={Login}/>
    </div>
    </Router>
  );
}

export default App;
