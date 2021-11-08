import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./redux/reducer/rootReducer";
import { rootSaga } from "./redux/saga/rootSaga";

//Include styles
import "./index.scss";
import "./reset.scss";

//Include main component
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const saga = createSagaMiddleware();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
saga.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
