import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./RequestComplete.css";

class RequestComplete extends React.Component {
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
              <div className="main_title__text">Insurance Request Complete</div>
            </div>
            <div className="requestcom_main">
              <div className="requestcom_main__que">
                <div className="requestcom_que__product">물품이름</div>
                <div className="requestcom_que__insurance">보험이름</div>
                <div className="requestcom_que__id">고객 ID</div>
                <div className="requestcom_que__register">보험 접수일</div>
                <div className="requestcom_que__occurrence">사건 발생일</div>
                <div className="requestcom_que__detail">상세 내용</div>
              </div>
              <div className="requestcom_main__var">
                <div className="requestcom_var__var">:</div>
                <div className="requestcom_var__var">:</div>
                <div className="requestcom_var__var">:</div>
                <div className="requestcom_var__var">:</div>
                <div className="requestcom_var__var">:</div>
                <div className="requestcom_var__var">:</div>
              </div>
              <div className="requestcom_main__input">
                <div className="requestcom_input__product" />
                <div className="requestcom_input__insurance" />
                <div className="requestcom_input__id" />
                <div className="requestcom_input__register" />
                <div className="requestcom_input__occurrence" />
                <div className="requestcom_input__detail" />
              </div>
            </div>
            <div className="requestcom_complete">
              <Link className="requestcom_complete__btn" to="/mypage/request">
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

export default RequestComplete;
