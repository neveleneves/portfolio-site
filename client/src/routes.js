import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";

export const useRoutes = () => {
  return (
    <Switch>
      <Route path="/">
        <MainPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
