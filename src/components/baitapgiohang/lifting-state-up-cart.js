import React, { Component } from 'react'
import Modal from './modal';
import List from './danh-sach-san-pham';
import img1 from '../../assets/image/sp_iphoneX.png';
import img2 from '../../assets/image/sp_blackberry.png';
import img3 from '../../assets/image/sp_note7.png';
import img4 from '../../assets/image/sp_vivo850.png';
const mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: './img/img/sp_iphoneX.png'
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/img/meizuphone.jpg"
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/img/applephone.jpg"
    }
  ];
export default class LiftState extends Component{
    constructor(props){
        super(props)
        this.state ={
            chiTietSanPham: mangSanPham[0],
            gioHang: []
        }
    }
    handleTangGiam = (status, maSP) =>{
        console.log(status, maSP);
        let gioHang = [...this.state.gioHang]
        let index =gioHang.findIndex(item => {
            return item.maSP === maSP
        })
        if (status){
            gioHang[index].soLuong ++ ;// so luong gio hang thu index
        }
        else{
        if (gioHang[index].soLuong > 1){
            gioHang[index].soLuong--;
            console.log(  gioHang[index].soLuong);
            
        }
    }
        this.setState({
            gioHang
        })
    }
    tongSoLuong = () =>{
      // let tong = 0;
      // this.state.gioHang.map((item,index) =>{
      //   tong += item.soLuong;
      // })
      // return tong;
      return this.state.gioHang.reduce((tong, item)=>{
        return tong += item.soLuong;
      },0)
    }
    handleDelete = maSP =>{
        console.log(maSP);
        let gioHang = [...this.state.gioHang];
        let index = gioHang.findIndex (item => {
            return item.maSP === maSP;
        })
        if (index !== -1){
            gioHang.splice(index, 1);
        }
        this.setState({
            gioHang
        })
    }
    handleChiTietSanPham = (sanPham) =>{
        console.log(sanPham);
        this.setState({
            chiTietSanPham: sanPham
        })
    }
    handleThemGioHang = sanPham =>{
        const objSanPham = {
            maSP: sanPham.maSP,
            tenSP: sanPham.tenSP,
            hinhAnh: sanPham.hinhAnh,
            soLuong: 1,
            giaBan: sanPham.giaBan
        }
        console.log(objSanPham)
        // cach 2 
        // const test = { 
        //     ...sanPham,
        //     soLuong: 1
        // };
        // console.log(test)
        // console.log(sanPham);
        sanPham.soLuong = 1;
        let index = this.state.gioHang.findIndex(item => {
            return item.maSP === sanPham.maSP
        })
        let gioHang = this.state.gioHang;
        //--1 la khong thay
        // so duong la thay
        if (index !== -1){
            let sanPhamCapNhat = gioHang [index];
            sanPhamCapNhat.soLuong++;
        }
        else {
            gioHang = [...this.state.gioHang, objSanPham]
            
        }
        this.setState ({
            gioHang
        }, 
        () => {
            console.log(this.state);
            
        })
    }
    render(){
        return (
            <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.tongSoLuong()})
          </button>
        </div>
        <List danhSachSanPham = {mangSanPham}
        chiTietSanPham = {this.handleChiTietSanPham}
        themGioHang ={this.handleThemGioHang}
        /> 
        {/* // trong cung 1 scop moi xai this */}
        <Modal gioHang = {this.state.gioHang} delete = {this.handleDelete} tangGiam = {this.handleTangGiam}/>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={this.state.chiTietSanPham.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{this.state.chiTietSanPham.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{this.state.chiTietSanPham.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{this.state.chiTietSanPham.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{this.state.chiTietSanPham.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{this.state.chiTietSanPham.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{this.state.chiTietSanPham.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
        );
    }
}