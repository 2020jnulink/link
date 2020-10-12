import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./RequestDetail.css";

class RequestDetail extends React.Component {
  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title"> LINK </div>
          </div>
          <div className="title_underline"> </div>
          <div className="main">
            <div className="main_title">
              <div className="main_title__text"> Sign Up </div>
            </div>
            <div className="detail_title"> 물품명 & 보험이름 </div>
            <div className="detail_main">
              <div className="detail_main__que">
                <div className="detail_que__request"> 보험 접수일 </div>
                <div className="detail_que__date"> 사건 발생일 </div>
                <div className="detail_que__progress"> 보험 진행상황 </div>
                <div className="detail_que__detail"> 상세 내용 </div>
              </div>
              <div className="detail_main__var">
                <div className="detail_var__var">: </div>
                <div className="detail_var__var">: </div>
                <div className="detail_var__var">: </div>
                <div className="detail_var__var">: </div>
              </div>
              <div className="detail_main__input">
                <div className="detail_input__request" />
                <div className="detail_input__date" />
                <div className="detail_input__progress" />
                <div className="detail_input__detail" />
              </div>
            </div>
            <div className="detail_confirm">
              <Link className="detail_confirm__btn" to="/mypage/request">
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

export default RequestDetail;
