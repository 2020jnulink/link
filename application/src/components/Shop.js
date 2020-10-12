import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Shop.css";

import product_AU_img from "./img/AU_TECH.png";
import product_carborn_img from "./img/carborn.png";
import product_delta_img from "./img/delta.png";
import product_freego_img from "./img/freego.png";
import product_EZ_img from "./img/EZ_Wheel.png";
import product_gyro_img from "./img/gyrocorp.png";
import product_nano_img from "./img/nano_wheel.png";
import product_papa_img from "./img/PAPA.png";
import product_WR_img from "./img/Wheel_Runner.png";
import product_WW_img from "./img/widewheel.png";

class Shop extends React.Component {
  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="main_title">
              <div className="main_title__text">Search</div>
              <input></input>
            </div>
            <Link className="link_AU" to="/shop/product_AU">
              <img className="product_AU_img" src={product_AU_img} alt="img" />
            </Link>
            <Link className="link_carborn" to="/shop/product_carborn">
              <img
                className="product_carborn_img"
                src={product_carborn_img}
                alt="img"
              />
            </Link>
            <Link className="link_delta" to="/shop/product_delta">
              <img
                className="product_delta_img"
                src={product_delta_img}
                alt="img"
              />
            </Link>
            <Link className="link_freego" to="/shop/product_freego">
              <img
                className="product_freego_img"
                src={product_freego_img}
                alt="img"
              />
            </Link>
            <Link className="link_EZ" to="/shop/product_EZ">
              <img className="product_EZ_img" src={product_EZ_img} alt="img" />
            </Link>
            <Link className="link_gyro" to="/shop/product_gyrocorp">
              <img
                className="product_gyro_img"
                src={product_gyro_img}
                alt="img"
              />
            </Link>
            <Link className="link_nano" to="/shop/product_nano">
              <img
                className="product_nano_img"
                src={product_nano_img}
                alt="img"
              />
            </Link>
            <Link className="link_papa" to="/shop/product_papa">
              <img
                className="product_papa_img"
                src={product_papa_img}
                alt="img"
              />
            </Link>
            <Link className="link_WR" to="/shop/product_WR">
              <img className="product_WR_img" src={product_WR_img} alt="img" />
            </Link>
            <Link className="link_WW" to="/shop/product_WW">
              <img className="product_WW_img" src={product_WW_img} alt="img" />
            </Link>
          </div>
        </body>
        <div className="nav_var">
          <Navigation_var />
        </div>
      </div>
    );
  }
}

export default Shop;
