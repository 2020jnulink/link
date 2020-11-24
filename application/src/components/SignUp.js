import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./SignUp.css";

class SignUp extends React.Component {
  state = {
    signup_name: "", // eslint-disable-line no-unused-vars
    signup_id: "", // eslint-disable-line no-unused-vars
    signup_password: "", // eslint-disable-line no-unused-vars
    signup_resident: "", // eslint-disable-line no-unused-vars
    signup_address: "", // eslint-disable-line no-unused-vars
    signup_phone: "", // eslint-disable-line no-unused-vars
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
              <div className="main_title__text">Sign Up</div>
            </div>
            <div className="signup_main">
              <div className="signup_main__que">
                <div className="signup_que__name">NAME</div>
                <div className="signup_que__id">ID</div>
                <div className="signup_que__password">Password</div>
                <div className="signup_que__resident">
                  Resident Registration Number
                </div>
                <div className="signup_que__address">Address</div>
                <div className="signup_que__phone">Phone Number</div>
              </div>
              <div className="signup_main__var">
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
                <div className="signup_var__var">:</div>
              </div>
              <div className="signup_main__input">
                <input
                  className="signup_input__name"
                  value={this.state.signup_name} // eslint-disable-line no-unused-vars
                  onChange={this.handleChange}
                  name="signup_name"
                />
                <input
                  className="signup_input__id"
                  value={this.state.signup_id} // eslint-disable-line no-unused-vars
                  onChange={this.handleChange}
                  name="signup_id"
                />
                <input
                  className="signup_input__password"
                  value={this.state.signup_password} // eslint-disable-line no-unused-vars
                  onChange={this.handleChange}
                  name="signup_password"
                />
                <input
                  className="signup_input__resident"
                  value={this.state.signup_resident} // eslint-disable-line no-unused-vars
                  onChange={this.handleChange}
                  name="signup_resident"
                />
                <input
                  className="signup_input__address"
                  value={this.state.signup_address} // eslint-disable-line no-unused-vars
                  onChange={this.handleChange}
                  name="signup_address"
                />
                <input
                  className="signup_input__phone"
                  value={this.state.signup_phone} // eslint-disable-line no-unused-vars
                  onChange={this.handleChange}
                  name="signup_phone"
                />
              </div>
            </div>
            <div className="signup_complete">
              <Link className="signup_complete__btn" to="/login">
                Sign Up
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

export default SignUp;
