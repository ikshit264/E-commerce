import "./SingleProduct.scss";
import {
  FaCartPlus,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";


import RelatedProducts from "./RelatedProducts/RelatedProducts";
import prod from "../../assets/products/earbuds-prod-1.webp";
const SingleProduct = (props) => {

  return (
    <div className="single-product-main-contetnt">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="" />
          </div>
          <div className="right">
            <span className="name">Product name</span>
            <span className="proce">Price</span>
            <span className="decs">Product Discription</span>
            <div className="cart-buttons">
              <div className="quality-buttons">
                <span>-</span>
                <span>3</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus />
                ADD TO CART
              </button>
            </div>
              <span className="divider" />
              <div className="info-items">
              {/* <br /> */}
                {/* <span className="text-bold"> */}
                  <span className="text-bold">
                    Category : 
                    <span> Headphones</span>
                  </span>
                {/* </span> */}
                <br />
                <span className="social-icons">
                  <span className="text-bold">Share : </span>
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
