

import React from "react";
import Login from "./screens/login"
import Starwars from "./screens/starwars";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
