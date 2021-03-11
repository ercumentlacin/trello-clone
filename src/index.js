import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./Context/StateProvider";
import reducer, { initialState } from "./Reducer";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// global css
import "./styles.css";
// main area
import Layout from "./Layout";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
