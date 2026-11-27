
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import "animate.css";
import "aos/dist/aos.css";

import AOS from "aos";

import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PreLoader from "./components/PreLoader.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  offset: 100,
  delay: 0,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <PreLoader />

        <div className="container mx-auto px-4">
          <Navbar />
          <App />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
