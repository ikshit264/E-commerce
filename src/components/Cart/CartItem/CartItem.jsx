// import React, { useContext } from "react";
// import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./CartItem.scss";
const CartItem = () => {
  // const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
  //     useContext(Context);

  return (
    <div className="cart-products">
      <div className="search-result-item">
        <div className="image-container">
          <img alt="" src={prod} />
        </div>
        <div className="prod-details">
          <span className="name">Product name</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>3</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">
              <span>&#8377;499</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
