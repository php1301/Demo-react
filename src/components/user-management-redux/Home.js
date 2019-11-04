import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import * as action from "../../redux/actions/index";
import {connect} from 'react-redux';
class HomeRedux extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      userEdit: null,
      keyWord: ""
    }
  }
 
  handleDelete = id => {
    let userList = [...this.state.userList];
    console.log(id);
    let index = this.timViTri(id);
    console.log(index);
    if (index != -1) {
      userList.splice(index, 1);
    }
    this.setState({
      userList
    })
  }
  // handleOnSubmit = user => {
  //   console.log(user);
  //   if (user.id !==-1) //!== -1 //neu user id khac rong tuc la da tim thay id co roi thi ko dc add  
  //   {
  //     console.log("edit");
  //   }
  //   else {
  //     user.id = Math.random();
  //     let userList = [...this.state.userList]
  //     this.setState({
  //       userList
  //     })
  //   }
  //   // let userList = [...this.state.userList, user]


  // }
  // handleOnSubmit = user => {
  //   // tim vi tri
  //   console.log(user);
  //   if (user.id !== "") {
  //     let userList = [...this.state.userList]
  //     let index = this.timViTri(user.id);
  //     userList[index] = user
  //     this.setState({
  //       userList,
  //       userEdit: userList
  //     })
  //   } else {
  //     //ADD

  //     user.id = Math.random();

  //     let userList = [...this.state.userList, user];

  //     this.setState({
  //       userList
  //     });
  //   }
  // }
  // handleUserEdit = user => {
  //   console.log(user);
  //   this.setState({
  //     userEdit: user
  //   })
  // }
  // handleOnFilter = (keyWord) => {
  //   console.log(keyWord);
  //   // let userList = [...this.state.userList]
  //   // 
  //   this.setState({
  //     keyWord
  //   })
  // }
  render() {
    // let { userList, keyWord } = this.state;
    // // userList = this.state.userList
    // userList = userList.filter(item =>{
    //     return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
    //    })
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management Redux</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search/>
          <button
            onClick={() => this.props.EditState()}
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdRedux"
          >
            Add User
          </button>
        </div>
        <Users/>
        <Modal/>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    EditState: () =>{
      let action = {
        type: "EDIT_USER",
        user: null
      }
      dispatch(action)
    }
  }
}
export default connect (null, mapDispatchToProps)(HomeRedux);
