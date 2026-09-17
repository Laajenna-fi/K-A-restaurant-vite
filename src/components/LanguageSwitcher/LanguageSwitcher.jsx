import useLanguage from "../../context/useLanguage.jsx";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <select
      className="language-switcher"
      value={language}
      onChange={(e) => changeLanguage(e.target.value)}
      aria-label="Language"
    >
      <option value="fi">Suomi</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSwitcher;
