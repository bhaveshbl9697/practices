import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.unregister();