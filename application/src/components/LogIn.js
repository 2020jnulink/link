import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./LogIn.css";

class LogIn extends React.Component {
  state = {
    walletid: "", // eslint-disable-line no-unused-vars
    login_password: "", // eslint-disable-line no-unused-vars
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
              <div className="main_title__text">Login</div>
            </div>
            <div className="login_main">
              <div className="login_main__que">
                <div className="login_que__id">ID</div>
                <div className="login_que__password">Password</div>
              </div>
              <div className="login_main__var">
                <div className="login_var__var">:</div>
                <div className="login_var__var">:</div>
              </div>
              <div className="login_main__input">
                <input
                  className="login_input__id"
                  value={this.state.walletid} // eslint-disable-line no-unused-vars
                  onChange={this.handleChange}
                  name="walletid"
                />
                <input
                  className="login_input__password"
                  value={this.state.login_password} // eslint-disable-line no-unused-vars
                  onChange={this.handleChange}
                  name="login_password"
                />
              </div>
            </div>
            <div className="login_btns">
              <Link className="login_signup__btn" to="/seller">
                Seller Log In
              </Link>
              <Link className="login_signup__btn" to="/signup">
                Sign Up
              </Link>
              <div className="login_login__btn">Log In</div>
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

export default LogIn;
