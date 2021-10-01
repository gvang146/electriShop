import React from 'react'
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Typography } from '@material-ui/core'
import Filter from "./components/Filter"
import {withRouther, BrowserRouter as Router, Switch, history} from "react-router-dom"

function App() {
  return (
    <div className="container">
      <Header/>
      <div className="top-section">
        <NavBar />
        <Typography variant="h6"
          style={{ alignItems: 'center' }}>
          Welcome To the Shop!
        </Typography>
      </div>
      <div className="body2">

      </div>

    </div>
  );
}

export default App;
