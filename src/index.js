import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";

const App = () => {
  return <h1>ProShop Auth MFE</h1>;
};

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode><App /></StrictMode>);
