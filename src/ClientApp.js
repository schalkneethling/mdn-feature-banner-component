// @flow

import React from "react";
import { render } from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
const renderApp = () => {
  if (rootElement !== null) {
    render(<App />, rootElement);
  }
};

renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
