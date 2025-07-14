
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(App());
} else {
  document.body.innerHTML = "<h1>ROOT ELEMENT NOT FOUND</h1>";
}
