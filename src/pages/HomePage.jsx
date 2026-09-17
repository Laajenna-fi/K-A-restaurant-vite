import useLanguage from "../context/useLanguage.jsx";

import Hero from "../components/layout/Hero/Hero.jsx";

import "../styles/pages/HomePage.css";
import ProductCard from "../components/ui/ProductCard/ProductCard.jsx";
import Button from "../components/ui/Button/Button.jsx";
import MapEmbed from "../components/layout/MapEmbed/MapEmbed.jsx";
import products from "../data/products.json";
import { getProductImage } from "../lib/productImages.js";

const popularPizzas = products
  .filter((p) => p.popular)
  .map((p) => ({
    slug: p.slug,
    name: p.name,
    description: p.description,
    price: p.price,
    imgUrl: getProductImage(p.image),
  }));

const HomePage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <Hero />

      <section id="home-products">
        <h1 className="page-title">─ {t("home.sectionTitle")} ─</h1>
        <div className="product-grid">
          {popularPizzas.map((pizza) => (
            <ProductCard key={pizza.slug} pizza={pizza} />
          ))}
        </div>

        <div className="products-view-all-btn-container">
          <Button url="/menu" text={t("home.viewFullMenu")} />
        </div>
      </section>

      <section id="home-welcome">
        <h2 className="home-welcome-title">{t("home.welcomeTitle")}</h2>
        <MapEmbed />
      </section>
    </div>
  );
};

export default HomePage;
