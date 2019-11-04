import React, { Component } from "react";

class ItemPhone extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="container">
            <div className="card bg-light" style={{ width: 300 }}>
              <img
                className="card-img-top"
                src="./img/sp_iphoneX.png"
                alt="Card image"
                style={{ maxWidth: "100%", height: 250 }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">iPhone X</h4>
                <p>
                  iPhone X features a new all-screen design. Face ID, which
                  makes your face your password
                </p>
                <button className="btn btn-primary">Detail</button>
                <button href="#" className="btn btn-danger">
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemPhone;
