import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/app.scss";

import AppLayout from "layouts/AppLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <AppLayout {...props} />} />
      <Redirect from="/" to="/upcoming-launches" />
    </Switch>
  </BrowserRouter>
);
