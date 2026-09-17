import "./ProductCard.css";

const ProductCard = ({ pizza }) => {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img
          src={pizza.imgUrl}
          alt={pizza.name}
          className="product-image"
          loading="lazy"
        />
      </div>
      <div className="product-content">
        <h2 className="product-name">{pizza.name}</h2>
        <p className="product-description">{pizza.description}</p>
        <span className="product-price">
          €{pizza.price.toFixed(2).replace(".", ",")}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;
