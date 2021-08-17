import React from "react";
import { BrowserRouter } from "react-router-dom";

import { useRoutes } from "./routes";

import "./App.scss";


function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <div className="App">
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
