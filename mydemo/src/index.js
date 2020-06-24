import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyled } from "./style/reset-css";
import App from "./containers/App.js";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
ReactDOM.render(
  <BrowserRouter>
    <GlobalStyled></GlobalStyled>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
