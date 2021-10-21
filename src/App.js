import React from 'react'
import './App.css';
import Header from './components/Header'
import { Typography } from '@material-ui/core'
import Login from "./components/accountpages/Login"
import Dashboard from "./components/accountpages/Dashboard"
import Register from "./components/accountpages/Register"
import ForgotPass from "./components/accountpages/ForgotPass";
import { withRouther, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useState, useEffect } from 'react';

function App() {
  users: [
    {id: 1},
    {email: 'gvang146@gmail.com'},
    {pass: 'pa55'},
    {lastname: 'Vang'},
    {firstname: 'Ger'},
  ]
  /*const [user, setUser] = useState(false);
  useEffect(() => {
    getUser();
  }, []);
function getUser() {
  fetch('http://localhost:5432/userprofile')
  .then(response => {
    return response.text();
  })
  .then(data => {
    setUser(data);
  });
  }
function createUser() {
  let email = prompt("Enter Email Address");
  let lastName = prompt("Enter Last Name");
  let firstName = prompt("Enter Fist Name");
  fetch('http://localhost:5432/userprofile', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, lastName, firstName}),
  })
  .then(response => {
    return response.text();
  })
  .then(data => {
    alert(data);
    getUser();
  });
}

function deleteUser() {
  let id = prompt("Enter an id");
  fetch('http://localhost:5432/userprofile/${id}', {
    method: 'DELETE',
  })
  .then(response => {
    return response.text();
  })
  .then(data => {
    alert(data);
    getUser();
  })
}*/

  return (
    <Router>
      <div className="container">
        <Header />
      </div>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login(user)} />
        <Route path="/register" component={Register} />
        <Route path="/forgotPass" component={ForgotPass} />
      </Switch>
    </Router>
  );
}

export default App;
