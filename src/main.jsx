import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "animate.css";
import "./index.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#e34c67",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
