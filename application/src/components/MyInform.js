import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./MyInform.css";

class MyInform extends React.Component {
  state = {
    mypage_name: "", // eslint-disable-line no-unused-vars
    mypage_id: "", // eslint-disable-line no-unused-vars
    mypage_password: "", // eslint-disable-line no-unused-vars
    mypage_resident: "", // eslint-disable-line no-unused-vars
    mypage_address: "", // eslint-disable-line no-unused-vars
    mypage_phone: "", // eslint-disable-line no-unused-vars
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
              <div className="main_title__text">My Page</div>
            </div>
            <div className="myinform_main">
              <div className="myinform_main__que">
                <div className="myinform_que__name">NAME</div>
                <div className="myinform_que__id">ID</div>
                <div className="myinform_que__password">Password</div>
                <div className="myinform_que__resident">
                  Resident Registration Number
                </div>
                <div className="myinform_que__address">Address</div>
                <div className="myinform_que__phone">Phone Number</div>
              </div>
              <div className="myinform_main__var">
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
                <div className="myinform_var__var">:</div>
              </div>
              <div className="myinform_main__input">
                <input
                  className="myinform_input__name"
                  onChange={this.handleChange}
                  name="mypage_name"
                  value={this.state.mypage_name} // eslint-disable-line no-unused-vars
                />
                <input
                  className="myinform_input__id"
                  onChange={this.handleChange}
                  name="mypage_id"
                  value={this.state.mypage_id} // eslint-disable-line no-unused-vars
                />
                <input
                  className="myinform_input__password"
                  onChange={this.handleChange}
                  name="mypage_password"
                  value={this.state.mypage_password} // eslint-disable-line no-unused-vars
                />
                <input
                  className="myinform_input__resident"
                  onChange={this.handleChange}
                  name="mypage_resident"
                  value={this.state.mypage_resident} // eslint-disable-line no-unused-vars
                />
                <input
                  className="myinform_input__address"
                  onChange={this.handleChange}
                  name="mypage_address"
                  value={this.state.mypage_address} // eslint-disable-line no-unused-vars
                />
                <input
                  className="myinform_input__phone"
                  onChange={this.handleChange}
                  name="mypage_phone"
                  value={this.state.mypage_phone} // eslint-disable-line no-unused-vars
                />
              </div>
            </div>
            <div className="myinform_complete">
              <Link className="myinform_complete__btn" to="/mypage">
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

export default MyInform;
