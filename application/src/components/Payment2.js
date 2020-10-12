import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./Payment.css";

class Payment extends React.Component {

/*
    //props를 생성한다
    constructor(props) {
      super(props);
      this.state = {
        title: null
      }
    }
*/
state ={
  item_price : "",
  insurance_price: "",
  total_price:"",
  card_number:"",
  card_password:"",
  card_expiration:""
}

handleChange = (e) => {
  this.setState({
    [e.target.name] : e.target.value
  })
  console.log(this.state);
}

//결제 데이터를 node.js 서버로 제출
handleClick = (e) => {
  //e.prevendDefault();


  console.log("shop_info" + JSON.stringify(this.state))
  fetch('http://localhost:3001/api/shop', {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json'
      },
      body:  JSON.stringify({
        
          item_price : this.state.item_price,
          insurance_price: this.state.insurance_price,
          total_price: this.state.total_price,
          card_number: this.state.card_number,
          card_password: this.state.card_password,
          card_expiration: this.state.card_expiration
      
      })
    })
  .then(response => console.log("response"))
 .then(response => response.json());


  this.setStatestate ={
   item_price : "",
   insurance_price: "",
   total_price:"",
   card_number:"",
   card_password:"",
   card_expiration:""
}

}



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
            <div className="payment_main">
              <div className="payment_main__que">
                <div className="payment_que__product">상품 금액</div>
                <div className="payment_que__insurance">보험 금액</div>
                <div className="payment_que__total">총 금액</div>
                <div className="payment_que__number">카드 번호</div>
                <div className="payment_que__password">카드 비밀번호</div>
                <div className="payment_que__validity">카드 유효기간</div>
              </div>
              <form className="payment_main__var" >
                <div className="payment_var__var">:
                <input name="item_price" value={this.state.item_price} onChange={this.handleChange}></input>
                </div>
                <div className="payment_var__var">:
                <input name="insurance_price" value={this.state.insurance_price} onChange={this.handleChange}></input>
                </div>
                <div className="payment_var__var">:
                <input name="total_price" value={this.state.total_price} onChange={this.handleChange}></input>
                </div>
                <div className="payment_var__var">:
                <input name="card_number" value={this.state.card_number} onChange={this.handleChange}></input> 
                </div>
                <div className="payment_var__var">:
                <input name="card_password" type="password" value={this.state.card_password} onChange={this.handleChange}></input>
                </div>
                   <div className="payment_var__var">: 
                  <input name="card_expiration" value={this.state.card_expiration}  onChange={this.handleChange}></input>
   
                </div>
                </form>
              <div className="payment_main__input">
                <div className="payment_input__product" />
                <div className="payment_input__insurance" />
                <div className="payment_input__total" />
                <div className="payment_input__number" />
                <div className="payment_input__password" />
                <div className="payment_input__validity" />
              </div>
            </div>
            <div className="payment_complete">
              <Link
                className="payment_complete__btn"
                to="/shop/product/paymentcompleted"
                onClick={this.handleClick}
                >
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

export default Payment;
