import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Login from "../components/login/login";
import Admin from "../components/admin/admin";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Switch>
          <Redirect exact from="/" to="/Login"></Redirect>
          <Route path="/Login" component={Login}></Route>
          <Route path="/Admin" component={Admin}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
