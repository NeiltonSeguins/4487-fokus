import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TarefasProvider from "./context/TarefasContext.jsx";
import CronometroProvider from "./context/CronometroContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CronometroProvider>
      <TarefasProvider>
        <App />
      </TarefasProvider>
    </CronometroProvider>
  </StrictMode>,
);
