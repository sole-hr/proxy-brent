import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import App from "./components/App.jsx";

const componentUrls = [
  process.env.TITLE_URL,
  process.env.IMAGE_GALLERY_URL,
  process.env.COLOR_SELECTOR_URL,
  process.env.SIZE_SELECTOR_URL,
  process.env.CART_FAVORITE_URL,
  process.env.DESCRIPTION_URL,
  process.env.GUIDES_URL,
  process.env.SUBFOOTER_URL
];

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
