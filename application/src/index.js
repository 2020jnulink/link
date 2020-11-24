import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App2";

require('dotenv').config();
const Koa = require('koa');
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
