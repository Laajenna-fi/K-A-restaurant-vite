// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LanguageProvider from "./context/LanguageContext.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";

import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/Menu/MenuPage.jsx";
import AboutUsPage from "./pages/AboutUs/AboutUsPage.jsx";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions.jsx";

import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="about" element={<AboutUsPage />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
