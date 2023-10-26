import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs"
import CartItem from "./CartItem/CartItem";
import { useState } from "react";



const Cart = (props) => {
    const [EmptyCart, setEmptyCart] = useState(false)


    return <div className="cart-panel">
    <div
        className="opac-layer"
        onClick={() => props.setShow(false)}
    ></div>
    <div className="cart-content">
        <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span
                className="close-btn"
                onClick={() => props.setShow(false)}
            >
                <span className="close-btn" />
                <MdClose className="close-btn" />
                <span className="text">close</span>
            </span>
        </div>

        {EmptyCart &&
            <div className="empty-cart">
                <BsCartX />
                <span>No products in the cart.</span>
                <button className="return-cta" onClick={() => {props.setShow(false)}}>
                    RETURN TO SHOP
                </button>
            </div>
        }

        {
            <>
                <CartItem />
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal:</span>
                        <span className="text total">
                            &#8377; 1497
                        </span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta">
                            Checkout
                        </button>
                    </div>
                </div>
            </>
        }
    </div>
</div>;
};

export default Cart;
