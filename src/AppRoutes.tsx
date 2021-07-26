import { Switch } from "react-router-dom";
import { Redirect, Route } from "react-router";
import { Home } from "./views/Home";
import Directory from "./views/directory.js";


export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/home" render={() => <Home />}></Route>
      <Route exact path="/directory" render={() => <Directory />}></Route>
      <Redirect to="/directory" />
    </Switch>
  );
}
