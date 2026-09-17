import heroInterior from "../../../assets/images/hero-interior.webp";
import heroPasta from "../../../assets/images/hero-pasta.webp";
import "./Hero.css";
import useLanguage from "../../../context/useLanguage.jsx";
import Button from "../../ui/Button/Button.jsx";

const Hero = () => {
  const { t, language } = useLanguage();

  const titleLine1 =
    language === "fi" ? (
      <>
        Maukasta <em>pizzaa</em>
      </>
    ) : (
      <>
        Delicious <em>pizza</em>
      </>
    );
  const titleLine2 =
    language === "fi" ? (
      <>
        <em>pastaa</em> ja paljon muuta!
      </>
    ) : (
      <>
        <em>pasta</em> and much more!
      </>
    );

  return (
    <section className="hero">
      <div className="hero-media">
        <div className="hero-media-left">
          <img className="hero-pasta-image" src={heroPasta} alt="" />
        </div>
        <div
          className="hero-media-right"
          style={{ backgroundImage: `url(${heroInterior})` }}
        />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span>{titleLine1}</span>
          <span>{titleLine2}</span>
        </h1>
        <p className="hero-subtitle">{t("hero.subtitle")}</p>
        <Button url="/menu" text={t("hero.cta")} />
      </div>
    </section>
  );
};

export default Hero;
