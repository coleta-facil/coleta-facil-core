import React from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { isAuthenticated } from "./auth";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Rotas from "./pages/Rotas";
import Cadastro from "./pages/Cadastro";
import Dispositivos from "./pages/Dispositivos";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/cadastro" component={Cadastro} />
      <PrivateRoute exact path="/disp" component={Dispositivos} />
      <PrivateRoute exact path="/routes" component={Rotas} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
