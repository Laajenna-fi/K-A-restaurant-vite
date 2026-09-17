import "./AboutUsPage.css";
import useLanguage from "../../context/useLanguage.jsx";
import MapEmbed from "../../components/layout/MapEmbed/MapEmbed.jsx";
import phoneIcon from "../../assets/images/phone-icon.svg";
import mailIcon from "../../assets/images/mail-icon.svg";

const AboutUsPage = () => {
  const { t } = useLanguage();

  return (
    <section id="contact-info">
      <div className="contact-info-wrapper">
        <div className="contact-info-content">
          <div className="contact-info-text">
            <h1>{t("about.contactUs")}</h1>
            <ul>
              <li>{t("about.address")}</li>

              <li className="contact-methods">
                <a
                  className="contact-method"
                  href={`tel:${t("about.phone").replace(/\s/g, "")}`}
                >
                  <img src={phoneIcon} alt="" className="contact-icon" />
                  {t("about.phone")}
                </a>
                <a
                  className="contact-method"
                  href={`mailto:${t("about.supportEmail")}`}
                >
                  <img src={mailIcon} alt="" className="contact-icon" />
                  {t("about.supportEmail")}
                </a>
              </li>

              <li>
                {t("about.openingLabel")}
                <br />
                {t("about.openingHours")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
              </li>
            </ul>
          </div>

          <MapEmbed />
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
