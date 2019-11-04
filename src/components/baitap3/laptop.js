import React, { Component } from 'react'
export default class Laptop extends Component {
    render() {
        return (

            <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
                <h1 className="text-center">BEST LAPTOP</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: 300 }}>
                                <img
                                    className="card-img-top"
                                    src="./img/lt_macbook.png"
                                    alt="Card image"
                                    style={{ maxWidth: "100%", height: 250 }}
                                />
                                <div className="card-body text-center">
                                    <h4 className="card-title text-center">MACBOOK</h4>
                                    <p className="card-text">
                                        The MacBook is a brand of notebook computers manufactured by Apple
                                        Inc
            </p>
                                    <a href="#" className="btn btn-primary">
                                        Detail
            </a>
                                    <a href="#" className="btn btn-danger">
                                        Cart
            </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: 300 }}>
                                <img
                                    className="card-img-top"
                                    src="./img/lt_rog.png"
                                    alt="Card image"
                                    style={{ maxWidth: "100%", height: 250 }}
                                />
                                <div className="card-body text-center">
                                    <h4 className="card-title text-center">ASUS ROG</h4>
                                    <p className="card-text">
                                        the Asus ROG Strix Flare is the latest addition to Asus' lineup of
                                        ROG branded devices
            </p>
                                    <a href="#" className="btn btn-primary">
                                        Detail
            </a>
                                    <a href="#" className="btn btn-danger">
                                        Cart
            </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: 300 }}>
                                <img
                                    className="card-img-top"
                                    src="./img/lt_hp.png"
                                    alt="Card image"
                                    style={{ maxWidth: "100%", height: 250 }}
                                />
                                <div className="card-body text-center">
                                    <h4 className="card-title text-center">HP OMEN</h4>
                                    <p className="card-text">
                                        A young global smartphone brand focusing on introducing perfect
                                        sound quality
            </p>
                                    <a href="#" className="btn btn-primary">
                                        Detail
            </a>
                                    <a href="#" className="btn btn-danger">
                                        Cart
            </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                        <div className="container">
                            <div className="card bg-light" style={{ width: 300 }}>
                                <img
                                    className="card-img-top"
                                    src="./img/lt_lenovo.png"
                                    alt="Card image"
                                    style={{ maxWidth: "100%", height: 250 }}
                                />
                                <div className="card-body text-center">
                                    <h4 className="card-title text-center">LENOVO THINKPAD</h4>
                                    <p className="card-text">
                                        The ThinkPad X1 Carbon is a high-end notebook computer released by
                                        Lenovo in 2012
            </p>
                                    <a href="#" className="btn btn-primary">
                                        Detail
            </a>
                                    <a href="#" className="btn btn-danger">
                                        Cart
            </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)
    }
}
