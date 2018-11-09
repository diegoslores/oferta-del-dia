import React from "react";
import { Router } from "@reach/router";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Routes = () => (
  <Router>
    <StorePicker path="/" />
    <App path="/store/:storeId" />
    <NotFound default />
  </Router>
);

export default Routes;
