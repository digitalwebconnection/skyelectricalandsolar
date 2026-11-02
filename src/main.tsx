import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.tsx";

// Automatically unregister stale service workers from previous projects on localhost
if (typeof window !== "undefined") {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
      }
    });
  }

  // Catch & suppress third-party browser extension errors & console spam (Grammarly, AdBlockers, etc.)
  window.addEventListener(
    "error",
    (event) => {
      const src = event.filename || "";
      const msg = event.message || "";
      if (
        src.includes("content.js") ||
        src.includes("Grammarly") ||
        src.startsWith("chrome-extension://") ||
        msg.includes("unsafe-eval") ||
        msg.includes("unload is not allowed") ||
        msg.includes("The action has been blocked")
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    },
    true,
  );

  window.addEventListener("unhandledrejection", (event) => {
    const errorMsg =
      (event.reason && (event.reason.message || event.reason.stack)) ||
      String(event.reason || "");
    if (
      typeof errorMsg === "string" &&
      (errorMsg.includes("message channel closed") ||
        errorMsg.includes("listener indicated an asynchronous response") ||
        errorMsg.includes("asynchronous response by returning true") ||
        errorMsg.includes("unsafe-eval"))
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
