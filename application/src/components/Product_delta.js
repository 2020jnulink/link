import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/delta.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product.css";

class Product_delta extends React.Component {
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
                <div className="product_text__name">제품명 : delta 300</div>
                <div className="product_text__model">모델명 :delta300</div>
                <div className="product_text__manufact">제조회사 : Delta</div>
                <div className="product_text__price">가격 : 690,000원</div>
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
                제품 무게 : 22kg 최대 속력 : 25km/h 최대 주행거리 : 30km 최대
                등판각도 : 10도 배터리 : 탈/착식 배터리
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
export default Product_delta;
