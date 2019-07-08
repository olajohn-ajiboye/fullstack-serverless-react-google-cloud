import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'


import './App.css';



class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/project/:id" component={ProjectDetails}></Route>
            <Route exact path="/signin" component={SignIn}></Route>

          </Switch>

        </div>
      </BrowserRouter>

    );
  }
}

export default App
