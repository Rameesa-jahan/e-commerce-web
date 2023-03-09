import React from "react";
import "./style.css";
import { CiSearch } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Cart from "./cart";

function Navbar({ size }) {
  return (
    <div className="navbar">
      <div className="logo">
        Go<span className="span-color">Cart.</span>
      </div>
      <div className="navbar-pages">
        <Link to="/">
          <h4 className="nav-items"> Home</h4>
        </Link>
        <h4 className="nav-items"> Deals </h4>
        <h4 className="nav-items"> What's New</h4>
        <h4 className="nav-items"> Delivery</h4>
      </div>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder={`${(<CiSearch />)} search products`}
        ></input>
      </div>
      <div className="navbar-buttons">
        <button className="account">
          {" "}
          <BsFillPersonFill />
          Account
        </button>
        <Link to="/cart">
          <button className="cart">
            {" "}
            <BsFillCartFill /> Cart <span>{size}</span>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
