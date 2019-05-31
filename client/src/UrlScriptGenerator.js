import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import App from "./components/App.jsx";

const componentUrls = [process.env.KEN_URL, process.env.DAVID_URL];

const componentUrlPromises = componentUrls.map(url => {
  return Axios.get(url);
});

Promise.all(componentUrlPromises)
  .then(scripts => {
    scripts.forEach(script => {
      eval(script.data);
    });
  })
  .then(() => {
    ReactDOM.render(<App />, document.getElementById("app"));
  });

// ReactDOM.render(<App />, document.getElementById("app"));
