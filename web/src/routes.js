import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Rotas from "./pages/Rotas";
import Cadastro from "./pages/Cadastro";
import Dispositivos from "./pages/Dispositivos";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/cadastro" component={Cadastro} />
      <Route exact path="/dispositivos" component={Dispositivos} />
      <Route exact path="/rotas" component={Rotas} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
