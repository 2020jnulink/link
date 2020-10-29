import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./MyList.css";

class MyList extends React.Component {
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
            <div className="mylist_main">
              <div className="mylist_main__name">
                <div className="mylist_name__name">물품명</div>
              </div>
              <div className="mylist_main__var">
                <div className="mylist_var__var">:</div>
              </div>
              <div className="mylist_main__list"></div>
            </div>
            <div className="mylist_confirm">
              <Link className="mylist_confirm__btn" to="/mypage">
                Confirm
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

export default MyList;
