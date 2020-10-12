import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/EZ_Wheel.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product.css";

class Product_EZ extends React.Component {
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
                  제품명 : EZ Wheel Easyvation
                </div>
                <div className="product_text__model">모델명 : TAURUSMINI</div>
                <div className="product_text__manufact">
                  제조회사 : EZ Wheel
                </div>
                <div className="product_text__price">가격 : 880,000원</div>
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
                제품 무게 : 30kg 최대 주행거리 : 55km 배터리 : 52V 13AH
                리튬이온배터리 타이어 : 10인치 초광폭 에어튜브타이어 브레이크 :
                전후방 디스크+ABS 브레이크
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

export default Product_EZ;
