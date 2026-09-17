import "./TermsAndConditions.css";
import useLanguage from "../../context/useLanguage.jsx";

const TermsAndConditions = () => {
  const { t } = useLanguage();
  const sections = t("terms.sections");

  return (
    <div className="terms-container">
      <div className="terms-card">
        <h1>{t("terms.title")}</h1>
        <p className="terms-updated">{t("terms.updated")}</p>

        {Array.isArray(sections) &&
          sections.map((section, i) => (
            <section className="terms-section" key={i}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
