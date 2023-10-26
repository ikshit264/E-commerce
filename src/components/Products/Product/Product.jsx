import "./Product.scss";
import SingleProduct from "../../SingleProduct/SingleProduct";
import { Link } from "react-router-dom";
const Product = (props) => {
  return (
    <div className="product-card">
      <Link to="/products" className="none">
        <div className="thumbnail">
          <img src={props.image} alt="" />
        </div>
        <div className="prod-details">
          <div className="name">Earphones</div>
          <div className="price">&#8377; 499</div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
