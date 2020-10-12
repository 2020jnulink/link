import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/AU_TECH.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product_AU.css";





class Product_AU extends React.Component {

  state = {
    productname: "Fabric",
    manufactureer:"Hyper",
    price:"20",
    walletid:"5T6Y7U8I",
    scooterkey:"MS0"
  }

  handleClick = (e) => {
    //e.prevendDefault();
  
  
  //   console.log("shop_info" + JSON.stringify(this.state))
  //   fetch('http://localhost:3001/api/purchaseMusic', {
  //       method: 'POST',
  //       mode: 'cors',
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body:  JSON.stringify(this.state)
  //     })
  //   .then(response => console.log("response"))
  //  .then(response => response.json());
    
      fetch("http://localhost:3001/api/purchaseScooter",{
        method:'POST',
        mode:'cors',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          walletid: this.state.walletid,
          scooterkey: this.state.scooterkey
        })
      })
      .then(console.log(JSON.stringify({
        walletid:"5T6Y7U8I"
      })))
      .then(res =>res.json());


  
  }

  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="productname">LINK</div>
          </div>
          <div className="productname_underline"></div>
          <div className="main">
            <div className="product_summary">
              <img className="product_img" src={product_img} alt="img" />
              <div className="product_text">
                <div className="product_text__name">제품명 : {this.state.productname}</div>
                <div className="product_text__model">
                  모델명 : REDWINGBLACK8A
                </div>
                <div className="product_text__manufact">제조회사 : {this.state.singer}</div>
                <div className="product_text__price">가격 : {this.state.price}</div>
              </div>
            </div>
            <div className="product_buy">
              <Link className="product_buy__btn" to="/shop/product/suggestion"
              onClick={this.handleClick}>
                Buy
              </Link>
            </div>
            <div className="product_detail">
              <div className="product_detail__text">Detail information</div>
              <div className="product_detail__line" />
              <div className="product_detail__main">
                제품 무게 : 14.9kg 탑승자 최대 무게 : 120kg 최대 등판각도 : 20도
                최대 속력 : 25km/h 최대 주행거리 : 35km 배터리 : 36V 4.2Ah
                타이어 :솔리드 타이어 브레이크 : 전자식 브레이크, 기계식
                브레이크 방수 : IP54
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

export default Product_AU;
