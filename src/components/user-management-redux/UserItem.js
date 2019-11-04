import React, { Component } from "react";
import Users from "./Users";
import Home from "./Home";
import { connect } from "react-redux";
import * as action from "../../redux/actions/index";
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
          <button onClick={() => this.props.onEdit(user)}
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdRedux"
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => { this.props.onDelete(user.id) }}>Delete</button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(action.actOnDelete(id));
    },
    onEdit: user => {
      dispatch(action.actOnEdit(user));
    }
  }
}
export default connect(null, mapDispatchToProps)(UserItem);
//(mapstatetoprops, mapdispatchtoprops)
