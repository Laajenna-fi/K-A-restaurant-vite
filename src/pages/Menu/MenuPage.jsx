import { useState } from "react";
import ProductCard from "../../components/ui/ProductCard/ProductCard.jsx";
import "./MenuPage.css";
import RadioButton from "../../components/ui/RadioButton/RadioButton.jsx";
import useLanguage from "../../context/useLanguage.jsx";
import products from "../../data/products.json";
import { getProductImage } from "../../lib/productImages.js";

const CATEGORY_ORDER = [
  "pizza",
  "kzone",
  "kebab",
  "salad",
  "pasta",
  "uunipasta",
  "drinks",
];

const mapProduct = (p) => ({
  slug: p.slug,
  name: p.name,
  description: p.description,
  price: p.price,
  imgUrl: getProductImage(p.image),
});

const MenuPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = CATEGORY_ORDER.map((id) => ({
    id,
    label: t(`menu.categories.${id}`),
  }));

  const visibleCategories = activeCategory
    ? categories.filter((cat) => cat.id === activeCategory)
    : categories;

  const handleTabClick = (id) => {
    setActiveCategory((current) => (current === id ? null : id));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="menu-page">
      <div className="category-tabs">
        {categories.map((cat) => (
          <RadioButton
            text={cat.label}
            key={cat.id}
            onClick={() => handleTabClick(cat.id)}
            active={activeCategory === cat.id}
          />
        ))}
      </div>

      {visibleCategories.map((cat) => {
        const categoryProducts = products
          .filter((p) => p.category === cat.id)
          .map(mapProduct);

        if (categoryProducts.length === 0) return null;

        return (
          <div className="menu-category-section" key={cat.id}>
            <h2 className="menu-category-title">{cat.label}</h2>
            <div className="product-grid">
              {categoryProducts.map((pizza) => (
                <ProductCard key={pizza.slug} pizza={pizza} />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default MenuPage;
