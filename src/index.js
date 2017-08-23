import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import { CurrentGame } from "./components/connectors";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

window.React = React;
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <CurrentGame />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
