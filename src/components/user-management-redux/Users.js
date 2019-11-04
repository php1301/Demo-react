import React, { Component } from "react";
import UsersItem from "./UserItem";
import { connect } from "react-redux";
let people = {
  name : "Truc",
  age: "15"
}
let {name , age} = people
console.log(name ,age);
class Users extends Component {
  renderHTML = () => {
    let { userList, keyWord } = this.props;
    // this.props.userList
    console.log(keyWord)
    userList = userList.filter(item => {
      return item.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
    })
    return userList.map((item, index) => {
      return <UsersItem user={item} key={index} onDelete={this.props.onDelete} userEdit={this.props.userEdit} />
    })

  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderHTML()}
          </tbody>
        </table>
      </div >
    );
  }
}
const mapStateToProps = state => {
  return {
    userList: state.userReducer.userList,
    //state den thang chua tat ca state la userreducer va lay userList
    keyWord: state.userReducer.keyWord
  }
}
export default connect(mapStateToProps, null)(Users);
