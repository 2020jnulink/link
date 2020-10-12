import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/freego.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product.css";

class Product_freego extends React.Component {
  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="product_summary">
              <img className="product_img" src={product_img} alt="img" />
              <div className="product_text">
                <div className="product_text__name">
                  제품명 : freego direct F10
                </div>
                <div className="product_text__model">모델명 : f10eco</div>
                <div className="product_text__manufact">
                  제조회사 : FreeGo Direct
                </div>
                <div className="product_text__price">가격 : 797,500원</div>
              </div>
            </div>
            <div className="product_buy">
              <Link className="product_buy__btn" to="/shop/product/suggestion">
                Buy
              </Link>
            </div>
            <div className="product_detail">
              <div className="product_detail__text">Detail information</div>
              <div className="product_detail__line" />
              <div className="product_detail__main">
                제품 무게 : 20kg 탑승자 최대 무게 : 70kg 최대 속력 : 40km/h 최대
                주행거리 : 109km 배터리 : 52V 21Ah 리튬이온 배터리 타이어 :
                25.4cm 튜브타이어 브레이크 : 30도 방수 : IPX4
              </div>
            </div>
          </div>
        </body>
        <div className="nav_var">
          <Navigation_var />
        </div>
      </div>
    );
  }
}

export default Product_freego;
