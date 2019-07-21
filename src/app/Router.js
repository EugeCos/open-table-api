import React from "react";
import { Route, Switch } from "react-router";
import Search from "./components/search/search";
import Landing from "./components/landing/landing";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/search" component={Search} />
    </Switch>
  );
}
