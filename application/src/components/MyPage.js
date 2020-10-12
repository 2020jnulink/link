import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./MyPage.css";

class MyPage extends React.Component {
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
              <div className="main_title__text">My Page</div>
            </div>
            <div className="mypage_btns">
              <Link className="mypage_inform" to="/mypage/passwordcheck">
                Information Modification
              </Link>
              <Link className="mypage_list" to="/mypage/mylist">
                List of Goods & Insurance
              </Link>
              <Link className="mypage_insurance" to="/mypage/request">
                Insurance Requestion list
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

export default MyPage;
