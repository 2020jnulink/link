import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/PAPA.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product.css";

class Product_papa extends React.Component {
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
                  제품명 : Alpaca Speed Wing
                </div>
                <div className="product_text__model">모델명 : B838230169</div>
                <div className="product_text__manufact">
                  제조회사 : PAPA's Toy
                </div>
                <div className="product_text__price">가격 : 325,000원</div>
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
                제품 무게 : 9.5kg 탑승자 최대 무게 : 100kg 최대 속력 : 25km/h
                최대 주행거리 : 25km 최대 등판각도 : 15eh 배터리 : 36V 7.8Ah
                타이어 : 6.5인치 솔리드 타이어 브레이크 : 듀얼 브레이크 방수 :
                IPX54
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

export default Product_papa;
