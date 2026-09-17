import "./BrandLogo.css";
import logo from "../../../assets/images/ka-logo.svg";

const BrandLogo = ({ size = "nav" }) => (
  <img
    className={`brand-logo brand-logo--${size}`}
    src={logo}
    alt="K&A Restaurant"
  />
);

export default BrandLogo;
