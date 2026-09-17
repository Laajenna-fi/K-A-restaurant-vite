// src/components/layout/Navigation/NavigationBar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavigationBar.css";
import useLanguage from "../../../../context/useLanguage.jsx";

import BrandLogo from "../../../ui/BrandLogo/BrandLogo.jsx";
import LanguageSwitcher from "../../../LanguageSwitcher/LanguageSwitcher.jsx";

// Flip to true to bring back the top announcement bar (e.g. "Free home delivery...").
const SHOW_ANNOUNCEMENT_BAR = false;

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {SHOW_ANNOUNCEMENT_BAR && (
        <div className="announcement-bar">
          <span>{t("topbar.freeDelivery")}</span>
        </div>
      )}
      <header className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-row-start">
            <Link to="/" onClick={handleLogoClick}>
              <BrandLogo size="nav" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="navbar-links">
            <ul>
              <li>
                <Link to="/">{t("navigation.home")}</Link>
              </li>
              <li>
                <Link to="/menu">{t("navigation.menu")}</Link>
              </li>
              <li>
                <Link to="/about">{t("navigation.aboutUs")}</Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Right Side – Language only */}
          <div className="navbar-row-end">
            <LanguageSwitcher />
          </div>

          {/* Mobile Controls */}
          <div className="mobile-navbar-column-end">
            <button
              className="menuButton"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <img
                  className="close-icon"
                  src="./close-light.svg"
                  alt="Close"
                />
              ) : (
                <img src="./hamburger-menu.svg" alt="Menu" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="mobileMenu">
              <nav>
                <ul>
                  <li>
                    <Link to="/">{t("navigation.home")}</Link>
                  </li>
                  <li>
                    <Link to="/menu">{t("navigation.menu")}</Link>
                  </li>
                  <li>
                    <Link to="/about">{t("navigation.aboutUs")}</Link>
                  </li>
                </ul>
              </nav>

              <div className="mobile-menu-column-end">
                <LanguageSwitcher />
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
