import React, { Component } from 'react'
import Item from './sanpham';
export default class List extends Component {
    renderHTML = () => {
        console.log(this.props);
        
        return this.props.danhSachSanPham.map((sanPham, index) => {
            
            return <Item key={index} sanPham = {sanPham} chiTietSanPham ={this.props.chiTietSanPham} themGioHang ={this.props.themGioHang}/>;
        })
    }
    render() {
        return (<div className="container">
            <div className="row">
                {this.renderHTML()}
            </div>
        </div>)
    }
}