import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import MyPage from "./components/MyPage";
import PasswordCheck from "./components/PasswordCheck";
import MyInform from "./components/MyInform";
import MyList from "./components/MyList";
import Shop from "./components/Shop";
import Product_AU from "./components/Product_AU";
import Product_carborn from "./components/Product_carborn";
import Product_delta from "./components/Product_delta";
import Product_EZ from "./components/Product_EZ";
import Product_freego from "./components/Product_freego";
import Product_gyro from "./components/Product_gyro";
import Product_nano from "./components/Product_nano";
import Product_papa from "./components/Product_papa";
import Product_WR from "./components/Product_WR";
import Product_WW from "./components/Product_WW";
import Payment from "./components/Payment";
import PaymentCompleted from "./components/PaymentCompleted";
import Seller from "./components/Seller";
import Scooter_Create from "./components/Scooter_Create";
import Scooter_Change from "./components/Scooter_Change";
import Scooter_Delete from "./components/Scooter_Delete";
import Product_test from "./components/Product_test";


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/mypage" exact={true} component={MyPage} />
      <Route path="/mypage/passwordcheck" component={PasswordCheck} />
      <Route path="/mypage/myinform" component={MyInform} />
      <Route path="/mypage/mylist" component={MyList} />
      <Route path="/shop" exact={true} component={Shop} />
      <Route path="/shop/product_AU" component={Product_AU} />
      <Route path="/shop/product_carborn" component={Product_carborn} />
      <Route path="/shop/product_delta" component={Product_delta} />
      <Route path="/shop/product_delta" component={Product_EZ} />
      <Route path="/shop/product_freego" component={Product_freego} />
      <Route path="/shop/product_gyrocorp" component={Product_gyro} />
      <Route path="/shop/product_nano" component={Product_nano} />
      <Route path="/shop/product_papa" component={Product_papa} />
      <Route path="/shop/product_WR" component={Product_WR} />
      <Route path="/shop/product_WW" component={Product_WW} />
      <Route path="/shop/product/payment" component={Payment} />
      <Route
        path="/shop/product/paymentcompleted"
        component={PaymentCompleted}
      />
      <Route path="/seller" exact={true} component={Seller} />
      <Route path="/seller/create" component={Scooter_Create} />
      <Route path="/seller/change" component={Scooter_Change} />
      <Route path="/seller/delete" component={Scooter_Delete} />
      <Route path="/shop/product_test" component={Product_test} />

    </HashRouter>
  );
}

export default App;
