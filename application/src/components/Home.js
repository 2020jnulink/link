import React from "react";
import "./Home.css";
import home_img from "./img/home.jpg";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="home_main">
            <div className="home_img__center">
              <img className="home_img" src={home_img} alt="img"></img>
            </div>
            <div className="home_main__link">
              <Link className="gotobuy_btn" to="/shop">
                <div className="gotobuy">Go To Buy</div>
              </Link>
              <Link className="insurance_btn" to="/insurance">
                <div className="gotobuy">Insurance</div>
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

export default Home;
