import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Route, Routes, Link } from "react-router-dom";
// import { Context } from "../../utils/context";

import "./Header.scss";

const Header = () => {
  const [Showcart, setShow] = useState(false);
  const [Scrolled, changeScrolled] = useState(false);
  const [ShowSearch, setSearch] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      changeScrolled(true);
    } else changeScrolled(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // console.log(window.scrollY)
  }, []);

  return (
    <>
      <header className={`main-header ${Scrolled ? "Sticky-header" : ""}`}>
        <div className="header-content">
          <ul className="left">
            <Link to="/" className="none">
              <li className="left-item">Home</li>
            </Link>
            <Link to="/about" className="none">
              <li className="left-item">About</li>
            </Link>
            <Link to="/categories">
              <li className="left-item">Categories</li>
              </Link>
          </ul>
              <li className="center">JSDEVSTORE.</li>
          <div className="right">
            <AiOutlineSearch onClick={() => setSearch(true)} />
            <AiFillHeart />
            <span className="cart-icon" onClick={() => setShow(true)}>
              <AiOutlineShoppingCart />
              <span>5</span>
            </span>
          </div>
        </div>
      </header>
      {Showcart && <Cart setShow={setShow} />}
      {ShowSearch && <Search setSearch={setSearch} />}
    </>
  );
};

export default Header;
