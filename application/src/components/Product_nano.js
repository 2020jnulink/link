import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/nano_wheel.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product.css";

class Product_nano extends React.Component {
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
                <div className="product_text__name">제품명 : NQ-01+</div>
                <div className="product_text__model">모델명 : NQ01PLUS</div>
                <div className="product_text__manufact">
                  제조회사 : Nano Wheel
                </div>
                <div className="product_text__price">가격 : 453,000원</div>
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
                제품 무게 : 27kg 탑승자 최대 무게 : 12kg 최대 속력 : 25km/h 최대
                주행거리 : 40km 최대 등판각도 : 45도 배터리 : 60V 타이어 :
                전/후륜 11인치 초광폭 튜브리스 브레이크 : 전/후륜 유압식+전자식
                방수 : IPX4
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

export default Product_nano;
