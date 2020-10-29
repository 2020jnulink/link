import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Scooter_Change.css";

class Scooter_Change extends React.Component {
    state = {
        scooterkey:"",
        price:20
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
              <div className="main_title__text">Change Scooter</div>
            </div>
            <div className="change_main">
              <div className="change_main__que">
                <div className="change_que__resident">
                  ScooterKey
                </div>
                <div className="change_que__password">Price</div>
              </div>
              <div className="change_main__var">
                <div className="change_var__var">:</div>
                <div className="change_var__var">:</div>
              </div>
              <div className="change_main__input">
                <input
                  className="change_input__resident"
                  onChange={this.handleChange}
                  name="scooterkey"
                  value={this.state.scooterkey} // eslint-disable-line no-unused-vars
                />
                <input
                  className="change_input__password"
                  onChange={this.handleChange}
                  name="price"
                  value={this.state.price} // eslint-disable-line no-unused-vars
                />
              </div>
            </div>
            <div className="change_complete">
              <Link className="change_complete__btn" to="/seller">
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

export default Scooter_Change;
