// import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
// import useFetch from "../../../hooks/useFetch";
// import { useNavigate } from "react-router-dom";

const Search = (props) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Search for products"
          // onChange={onChange}
        />
        <MdClose className="close-btn" onClick={() => props.setSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see products you are looking for.
        </div>

        <div className="search-results">
          <div
            className="search-result-item"
            onClick={() => {
              props.setSeach(false);
            }}
          >
            <div className="image-container">
              <img alt="" src={prod} />
            </div>
            <div className="prod-details">
              <span className="name">Earphones</span>
              <span className="desc">Product Description</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
