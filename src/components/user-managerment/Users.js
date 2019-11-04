import React, { Component } from "react";
import UsersItem from "./UserItem";

export default class Users extends Component {
  renderHTML = (userList) =>{
    return this.props.userList.map((item, index) => {

      return <UsersItem user={item} key ={index} onDelete={this.props.onDelete} userEdit = {this.props.userEdit}/>
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
      </div>
    );
  }
}
