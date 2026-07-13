import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          {/* Homepage — unchanged single-page portfolio with hash anchors */}
          <Route path="/" element={<App />} />
          {/* GyaanVault notes platform */}
          <Route path="/notes" element={<NotesPage />} />
          {/* Deep link to a specific semester (SEO-friendly, shareable) */}
          <Route path="/notes/:semester" element={<NotesPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
