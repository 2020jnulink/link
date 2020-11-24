import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./PaymentCompleted.css";

class PaymentCompleted extends React.Component {
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
              <div className="main_title__text">결제 완료</div>
            </div>
            <div className="completed_main">
              <div className="completed_main__que">
                <div className="completed_que__product">상품명</div>
                <div className="completed_que__id">고객 ID</div>
              </div>
              <div className="completed_main__var">
                <div className="completed_var__var">:</div>
                <div className="completed_var__var">:</div>
              </div>
              <div className="completed_main__input">
                <div className="completed_input__product" />
                <div className="completed_input__id" />
              </div>
            </div>
            <div className="completed_complete">
              <Link className="completed_complete__btn" to="/">
                확인
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

export default PaymentCompleted;
