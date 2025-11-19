import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { Provider } from "jotai";
import { BrowserRouter } from "react-router";
import { gameStateStore } from "@/lib/atoms.ts";
import App from "./App.tsx";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={gameStateStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
}
