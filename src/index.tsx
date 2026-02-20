import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./components/app";
import { Provider } from "react-redux";
import { store } from "../src/store/index";
import '@fontsource/play/400.css';
import '@fontsource/play/700.css';

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
