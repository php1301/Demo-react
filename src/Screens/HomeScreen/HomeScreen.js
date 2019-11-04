import React from "react";
// import Logo from "../../img/logo.jpg";
import "./style.css";
import Header from "../../Layout/Header";
import Carousel from "../../Layout/Carousel";
import SmartPhone from "./SmartPhone";
import Laptop from "./Laptop";
import Promotion from "./Promotion";
import LiftState from "../../components/baitapgiohang/lifting-state-up-cart";
import List from "../../components/baitapgiohang/danh-sach-san-pham";
import Item from "../../components/baitapgiohang/sanpham";
import Home from "../../components/user-managerment/Home";
import Modal from "../../components/user-managerment/Modal";
import Search from "../../components/user-managerment/Search";
import UserItem from "../../components/user-managerment/UserItem";
import Users from "../../components/user-managerment/Users";
class HomeScreen extends React.Component {
  // title = "Shopping Online";
  render() {
    const title = "Shopping Online";

    return (
      <div>
        <div>
          <h1 className="display-4 text-center"> {title} </h1>
          {/* <img src={} /> */}
          {/* <Header></Header>
          <Carousel></Carousel>
          <SmartPhone></SmartPhone>
          <Laptop></Laptop>
          <Promotion></Promotion> */}
         {/* <LiftState/>
         <List/>
         <Item/>
         <Modal/> */}
        </div>
      </div>
    );
  }
}
export default HomeScreen;
