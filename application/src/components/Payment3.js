import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./Payment.css";

class Payment extends React.Component {
  state = {
    payment_product: "",
    payment_insurance: "",
    payment_total: "",
    payment_number: "",
    payment_password: "",
    payment_validity: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,
    })
    console.log(this.state);
  }
  

//결제 데이터를 node.js 서버로 제출
handleClick = (e) => {
  //e.prevendDefault();


  console.log("shop_info" + JSON.stringify(this.state))
  fetch('http://localhost:3001/api/shop', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        
        payment_product : this.state.payment_product,
          payment_insurance: this.state.payment_insurance,
          payment_total: this.state.payment_total,
          payment_number: this.state.payment_number,
          payment_password: this.state.payment_password,
          payment_validity: this.state.payment_validity
      
      })
    })
  .then(response => console.log("response"))
 .then(response => response.json());


  this.setStatestate ={
    payment_product: "",
    payment_insurance: "",
    payment_total: "",
    payment_number: "",
    payment_password: "",
    payment_validity: "",
}

}

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
              <div className="main_title__text">Insurance Applicance</div>
            </div>
            <div className="payment_main">
              <div className="payment_main__que">
                <div className="payment_que__product">상품 금액</div>
                <div className="payment_que__insurance">보험 금액</div>
                <div className="payment_que__total">총 금액</div>
                <div className="payment_que__number">카드 번호</div>
                <div className="payment_que__password">카드 비밀번호</div>
                <div className="payment_que__validity">카드 유효기간</div>
              </div>
              <div className="payment_main__var">
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
              </div>
              <div className="payment_main__input">
                <input
                  className="payment_input__product"
                  name="payment_product"
                  value={this.state.payment_product}
                  onChange={this.handleChange}
                />
                <input
                  name="payment_insurance"
                  className="payment_input__insurance"
                  value={this.state.payment_insurance}
                  onChange={this.handleChange}
                />
                <input
                  className="payment_input__total"
                  name="payment_total"
                  value={this.state.payment_total}
                  onChange={this.handleChange}
                />
                <input
                  className="payment_input__number"
                  value={this.state.payment_number}
                />
                <input
                  className="payment_input__password"
                  value={this.state.payment_password}
                />
                <input
                  className="payment_input__validity"
                  value={this.state.payment_validity}
                />
              </div>
            </div>
            <div className="payment_complete">
              <Link
                className="payment_complete__btn"
                to="/shop/product/paymentcompleted"
                onClick={this.handleClick}
              >
                NEXT
              </Link>
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

export default Payment;
