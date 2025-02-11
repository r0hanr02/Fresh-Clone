// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

// Import Clerk Publishable Key
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// Corrected createRoot usage
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={publishableKey} afterSignOutUrl={"/"}>
      <App />
    </ClerkProvider>
  </BrowserRouter>
);
