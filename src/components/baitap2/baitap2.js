import React, { Component } from "react";
import Header from "../baitap2/header";
import Carousel from "./Carousel";
import Wwd from "./wwd";
import Ctus from "./ctus";
import Listcard from "./listcard";
import Footer from "../baitap1/footer";
export default class Baitap2 extends Component {
    render() {
        return <div>
            <Header />
            <Carousel />
            <div className="container">
                <div className="row">
                    <Wwd />
                    <Ctus/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <Listcard/>
                <Listcard/>
                <Listcard/>
                </div>
            </div>
            <Footer/>
        </div>

    }
}