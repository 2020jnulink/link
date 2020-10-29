import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation_var.css";

class Navigation_var extends Component {
  state = {
    scooterkey: "", // eslint-disable-line no-unused-vars
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="navigation">
        <div className="link">
          <Link className="nav_signup" to="/signup">
            Sign Up
          </Link>
          <Link className="nav_login" to="/login">
            Log In
          </Link>
          <Link className="nav_mypage" to="/mypage">
            My Page
          </Link>
          <Link className="nav_home" to="/">
            Home
          </Link>
          <Link className="nav_shop" to="/shop">
            SHOP
          </Link>
        </div>
        <div className="nav_search">
          <input
            className="search_input"
            value={this.state.scooterkey} // eslint-disable-line no-unused-vars
            onChange={this.handleChange}
            name="scooterkey"
          />
          <div className="search_text"> Search </div>
        </div>
      </div>
    );
  }
}

export default Navigation_var;
