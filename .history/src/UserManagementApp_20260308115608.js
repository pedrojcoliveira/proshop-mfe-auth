import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";



const root = createRoot(document.getElementById("root"));
  root.render(<StrictMode>
    <BrowserRouter basename="/">
      <UserManagementApp />
    </BrowserRouter>
  </StrictMode>);
