import React from "react";
import ReactDOM from "react-dom";

//Include styles
import "./index.scss";
import "./reset.scss";

//Include main component
import App from "./App";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
