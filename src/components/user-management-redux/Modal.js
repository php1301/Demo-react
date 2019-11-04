import React, { Component } from "react";
import {connect} from "react-redux";
import * as action from "../../redux/actions/index";
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      name: "",
      email: "",
      phone: "",
      type: "USER"
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        username: nextProps.userEdit.username,
        name: nextProps.userEdit.name,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.phoneNumber
      })
    }
    else {
      this.setState({
        username: "",
        name: "",
        email: "",
        phone: "",
        type: "USER"
      })
    }
  }
  handleOnChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      // username: event.target.value
      [name]: value
    }, () => console.log(this.state))
  }
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
  }
  render() {
    return (
      <div
        className="modal fade"
        id="modelIdRedux"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input value={this.state.username} type="text" className="form-control" name="username" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input value={this.state.name} type="text" className="form-control" name="name" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input value={this.state.email} type="text" className="form-control" name="email" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input value={this.state.phone} type="text" className="form-control" name="phone" onChange={this.handleOnChange} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select value={this.state.type} onChange={this.handleOnChange} name="type" className="form-control">
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    //key: value
    onSubmit: user => {
      // let action = {
      //     type: "SAVE_USER",
      //     user
      // }
      dispatch(action.actOnSaveUser(user))
    }
  }
}
const mapStateToProps = state => {
  return {
    userEdit: state.userReducer.userEdit //userReducer chua tat ca state
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Modal);
