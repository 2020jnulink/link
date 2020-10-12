import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./InsuranceList.css";

class InsuranceList extends React.Component {
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
              <div className="main_title__text">Insurance List</div>
            </div>
            <div className="insurance_list">
              <div className="insurance_list_box">
                <div className="insurance_list__name">보험명</div>
                <div className="insurance_list__product">구매물건</div>
                <div className="insurance_list__id">보험ID</div>
                <div className="insurance_request">
                  <Link
                    className="insurance_request__btn"
                    to="/insurance/request"
                  >
                    Request
                  </Link>
                </div>
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

export default InsuranceList;
