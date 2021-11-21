import React from "react"; //from package
import ReactDOM from "react-dom";
import App from "./App"; //from a specific part of file
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
