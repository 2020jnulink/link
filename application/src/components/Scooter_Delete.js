import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Scooter_Delete.css";

class Scooter_Delete extends React.Component {
    state = {
        scooterkey:"",
      };
      handledelete = (e) => {
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
              <div className="main_title__text">delete Scooter</div>
            </div>
            <div className="delete_main">
              <div className="delete_main__que">
                <div className="delete_que__resident">
                  ScooterKey
                </div>
              </div>
              <div className="delete_main__var">
                <div className="delete_var__var">:</div>
              </div>
              <div className="delete_main__input">
                <input
                  className="delete_input__resident"
                  ondelete={this.handledelete}
                  name="scooterkey"
                  value={this.state.scooterkey} // eslint-disable-line no-unused-vars
                />
              </div>
            </div>
            <div className="delete_complete">
              <Link className="delete_complete__btn" to="/seller">
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

export default Scooter_Delete;
