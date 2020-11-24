import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/gyrocorp.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product.css";

class Product_gyro extends React.Component {
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
                  제품명 : Gyrocorp G Air
                </div>
                <div className="product_text__model">
                  모델명 : GYROCORPGairPLUS+
                </div>
                <div className="product_text__manufact">
                  제조회사 : Gyrocorp
                </div>
                <div className="product_text__price">가격 : 960,000원</div>
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
                탑승자 최대 무게 : 120kg 최대 속력 : 40km/h 최대 주행거리 : 40m
                최대 등판각도 : 25도 배터리 : 36V 리튬이온배터리 타이어 : 8인치
                튜브타이어 / 8인치 프리솔리드타이어 브레이크 : 후륜 전자식 +
                드럼{" "}
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
export default Product_gyro;
