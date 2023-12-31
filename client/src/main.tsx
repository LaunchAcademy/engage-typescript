import React from "react";
import { render } from "react-dom";
import RedBox from "redbox-react";

import config from "./config";

import App from "./components/App";

document.addEventListener("DOMContentLoaded", () => {
  const reactElement = document.getElementById("app");

  if (reactElement) {
    if (config.nodeEnv === "development") {
      try {
        render(<App />, reactElement);
      } catch (e) {
        render(<RedBox error={e} />, reactElement);
      }
    } else {
      render(<App />, reactElement);
    }
  }
});
