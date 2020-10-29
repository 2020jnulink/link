import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Payment.css";

class Payment extends React.Component {
  state = {
    payment_product: "", // eslint-disable-line no-unused-vars
    payment_insurance: "", // eslint-disable-line no-unused-vars
    payment_total: "", // eslint-disable-line no-unused-vars
    payment_number: "", // eslint-disable-line no-unused-vars
    payment_password: "", // eslint-disable-line no-unused-vars
    payment_validity: "", // eslint-disable-line no-unused-vars
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
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
              </div>
              <div className="payment_main__input">
                <input
                  className="payment_input__product"
                  onChange={this.handleChange}
                  name="payment_product"
                  value={this.state.payment_product} // eslint-disable-line no-unused-vars
                />
                <input
                  className="payment_input__total"
                  onChange={this.handleChange}
                  name="payment_total"
                  value={this.state.payment_total} // eslint-disable-line no-unused-vars
                />
                <input
                  className="payment_input__number"
                  onChange={this.handleChange}
                  name="payment_number"
                  value={this.state.payment_number} // eslint-disable-line no-unused-vars
                />
                <input
                  className="payment_input__password"
                  onChange={this.handleChange}
                  name="payment_password"
                  value={this.state.payment_password} // eslint-disable-line no-unused-vars
                />
                <input
                  className="payment_input__validity"
                  onChange={this.handleChange}
                  name="payment_validity"
                  value={this.state.payment_validity} // eslint-disable-line no-unused-vars
                />
              </div>
            </div>
            <div className="payment_complete">
              <Link
                className="payment_complete__btn"
                to="/shop/product/paymentcompleted"
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
