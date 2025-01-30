import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApartmentProvider } from "./context/ApartmentContext.tsx";
import { BrowserRouter as Router } from "react-router-dom"; // Import Router here

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <ApartmentProvider>
        <App />
      </ApartmentProvider>
    </Router>
  </StrictMode>
);
