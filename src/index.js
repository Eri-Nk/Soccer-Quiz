import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorScreen from "./ErrorScreen";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary FallbackComponent={ErrorScreen}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </ErrorBoundary>
);
