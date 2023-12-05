import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routing />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
