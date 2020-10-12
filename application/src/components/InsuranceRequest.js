import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./InsuranceRequest.css";

class InsuranceRequest extends React.Component {
  state = {
    request_type: "", // eslint-disable-line no-unused-vars
    request_date: "", // eslint-disable-line no-unused-vars
    request_description: "", // eslint-disable-line no-unused-vars
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
              <div className="main_title__text">Insurance Request</div>
            </div>
            <div className="request_main">
              <div className="request_main__que">
                <div className="request_que__type">유형</div>
                <div className="request_que__date">사건 날짜</div>
                <div className="request_que__description">사건 경위 작성</div>
              </div>
              <div className="request_main__var">
                <div className="request_var__var">:</div>
                <div className="request_var__var">:</div>
                <div className="request_var__var">:</div>
              </div>
              <div className="request_main__input">
                <input
                  className="request_input__type"
                  onChange={this.handleChange}
                  name="request_type"
                  value={this.state.request_type} // eslint-disable-line no-unused-vars
                />
                <input
                  className="request_input__date"
                  onChange={this.handleChange}
                  name="request_date"
                  value={this.state.request_date} // eslint-disable-line no-unused-vars
                />
                <input
                  className="request_input__description"
                  onChange={this.handleChange}
                  name="request_description"
                  value={this.state.request_description} // eslint-disable-line no-unused-vars
                />
              </div>
            </div>
            <div className="request_complete">
              <Link
                className="request_complete__btn"
                to="/insurance/requestcomplete"
              >
                Apply
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

export default InsuranceRequest;
