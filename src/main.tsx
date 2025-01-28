import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApartmentProvider } from "./context/ApartmentContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApartmentProvider>
      <App />
    </ApartmentProvider>
  </StrictMode>
);
