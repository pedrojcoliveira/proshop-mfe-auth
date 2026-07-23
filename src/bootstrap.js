import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserManagementApp from "./UserManagementApp";
import "./assets/styles/bootstrap.custom.css";
import "./assets/styles/index.css";
import "react-toastify/dist/ReactToastify.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter basename="/">
      <main className="py-3" style={{ minHeight: "100vh" }}>
        <Container>
          <UserManagementApp />
        </Container>
      </main>
    </BrowserRouter>
  </StrictMode>
);
