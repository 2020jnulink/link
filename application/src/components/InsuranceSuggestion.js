import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./InsuranceSuggestion.css";

class InsuranceSuggestion extends React.Component {
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
              <div className="main_title__text">Insurance Information</div>
            </div>
            <div className="insurance_inform">제품 관련 보험 정보</div>
            <div className="insurance_suggestion">보험에 가입하시겠습니까?</div>
            <div className="insurance_yesorno">
              <Link className="insurance_yes" to="/shop/product/join">
                Yes
              </Link>
              <Link className="insurance_no" to="/shop/product/payment">
                No
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

export default InsuranceSuggestion;
