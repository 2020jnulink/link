import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Seller.css";

class Seller extends React.Component {
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
              <div className="main_title__text">Seller</div>
            </div>
            <div className="seller_btns">
              <Link className="seller_create" to="/seller/create">
                Create Scooter
              </Link>
              <Link className="seller_change" to="/seller/change">
                Change Scooter
              </Link>
              <Link className="seller_delete" to="/seller/delete">
                Delete Scooter
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

export default Seller;
