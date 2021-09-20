import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar/Navbar";

import { useRoutes } from "./routes";

function App() {
  const routes = useRoutes();

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="App">{routes}</div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
