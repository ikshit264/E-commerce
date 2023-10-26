import "./Product.scss";
import SingleProduct from "../../SingleProduct/SingleProduct";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react";
const Product = (props) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div className="product-card">
      <Link to="/products" className="none">
        <div className="thumbnail">
          <img src={props.image} alt="" />
        </div>
        <div className="prod-details">
          <div className="name">Earphones</div>
          <div className="price">&#8377; 499</div>
          <ScrollToTop smooth />
        </div>
      </Link>
    </div>
  );
};

export default Product;
