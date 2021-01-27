import React, { useState, useEffect } from "react";
import Login from "./screens/login"
import Signup from "./screens/signup";
import Starwars from "./screens/starwars";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/starwars" component={Starwars} />
          <Route exact path="/logout"><Login data={[]} islogout={true} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
