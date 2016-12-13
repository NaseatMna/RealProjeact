import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store";
import Main from "./components/App";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
