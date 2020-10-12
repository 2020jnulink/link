import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./InsuranceJoin.css";

class InsuranceJoin extends React.Component {
  state = {
    join_insurance: "", // eslint-disable-line no-unused-vars
    join_name: "", // eslint-disable-line no-unused-vars
    join_address: "", // eslint-disable-line no-unused-vars
    join_phone: "", // eslint-disable-line no-unused-vars
    join_period: "", // eslint-disable-line no-unused-vars
    join_price: "", // eslint-disable-line no-unused-vars
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
              <div className="main_title__text">Insurance Applicance</div>
            </div>
            <div className="join_main">
              <div className="join_main__que">
                <div className="join_que__insurance">Insurance</div>
                <div className="join_que__name">NAME</div>
                <div className="join_que__address">Address</div>
                <div className="join_que__phone">Phone Number</div>
                <div className="join_que__period">Contract Period</div>
                <div className="join_que__price">Price</div>
              </div>
              <div className="join_main__var">
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
                <div className="join_var__var">:</div>
              </div>
              <div className="join_main__input">
                <input
                  className="join_input__insurance"
                  onChange={this.handleChange}
                  name="join_insurance"
                  value={this.state.join_insurance} // eslint-disable-line no-unused-vars
                />
                <input
                  className="join_input__name"
                  onChange={this.handleChange}
                  name="join_name"
                  value={this.state.join_name} // eslint-disable-line no-unused-vars
                />
                <input
                  className="join_input__address"
                  onChange={this.handleChange}
                  name="join_address"
                  value={this.state.join_address} // eslint-disable-line no-unused-vars
                />
                <input
                  className="join_input__phone"
                  onChange={this.handleChange}
                  name="join_phone"
                  value={this.state.join_phone} // eslint-disable-line no-unused-vars
                />
                <input
                  className="join_input__period"
                  onChange={this.handleChange}
                  name="join_period"
                  value={this.state.join_period} // eslint-disable-line no-unused-vars
                />
                <input
                  className="join_input__price"
                  onChange={this.handleChange}
                  name="join_price"
                  value={this.state.join_price} // eslint-disable-line no-unused-vars
                />
              </div>
            </div>
            <div className="join_complete">
              <Link className="join_complete__btn" to="/shop/product/payment">
                NEXT
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

export default InsuranceJoin;
