import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import BrandLogo from "../../ui/BrandLogo/BrandLogo.jsx";
import useLanguage from "../../../context/useLanguage.jsx";
import facebookIcon from "../../../assets/images/facebook-icon.svg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-logo">
          <Link to="/">
            <BrandLogo size="footer" />
          </Link>
        </div>

        <div className="footer-column">
          <h2>{t("footer.contactTitle")}</h2>
          <p>{t("about.address")}</p>
          <a href={`tel:${t("about.phone").replace(/\s/g, "")}`}>
            {t("about.phone")}
          </a>
          <a href={`mailto:${t("about.supportEmail")}`}>
            {t("about.supportEmail")}
          </a>
        </div>

        <div className="footer-column">
          <h2>{t("footer.hoursTitle")}</h2>
          <ul className="footer-hours">
            {t("footer.hours")
              .split("\n")
              .map((line, i) => (
                <li key={i}>{line}</li>
              ))}
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-social">
          <a
            href="https://www.facebook.com/KARavintola/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.facebook")}
          >
            <img src={facebookIcon} alt="" className="footer-social-icon" />
          </a>
          <a
            href="https://www.oivahymy.fi/api/raportti/224106"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-oiva-link"
          >
            {t("footer.oiva")}
          </a>
        </div>

        <small>
          {t("footer.copyright")}{" "}
          <a
            href="https://laajenna.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-credit-link"
          >
            Laajenna.fi
          </a>
        </small>

        <Link to="/terms" className="footer-terms-link">
          {t("footer.termsAndConditions")}
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
