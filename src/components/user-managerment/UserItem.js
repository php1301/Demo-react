import React, { Component } from "react";
import Users from "./Users";
import Home from "./Home";
class UserItem extends Component {

  render() {
    let { user } = this.props
    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button onClick={() => this.props.userEdit(user)}
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick ={() => {this.props.onDelete(user.id)}}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
