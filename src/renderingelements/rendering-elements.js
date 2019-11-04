import React, { Component } from 'react'
export default class ABC extends Component {
    name = "Cybersoft";
    username = "Hoang Phuc";
    lop = "FE28"
    renderInfo = () => {
        return <div>
            Họ tên: {this.username} - lớp: {this.lop}
        </div>
    }
    render() {
        return (
            <div className="container">
                <h3>Rendering</h3>
                <div>{this.renderInfo()}</div>
                {/* <div>{this.name}</div>
                {/* //this dai dien dang o Component */}
                {/* <div>{this.username}</div> */}
                {/* <div>{this.lop}</div> */}
            </div>
        )
    }
}