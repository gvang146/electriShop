import React from 'react'
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'
import {Typography} from '@material-ui/core'

function App() {
  return (
    <div className="container">
      <Header />
      <NavBar />
        <Typography variant="h6" 
                    style={{alignContent: 'center'}}>
          Welcome To the Shop!
        </Typography>
    </div>
  );
}

export default App;
