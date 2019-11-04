import React, { Component } from "react";
import { throwStatement } from "@babel/types";

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        username: "",
        password: "",
        email: ""
      },
      error: {
        // username: "Vui long nhap Username",
        // password: "Nhap password 6-7 ki tu",
        // email: "nhap email dung dinh dang"
        username: "",
        password: "",
        email: ""
      },
      formValid: false, // chua nhap gi la sai
      usernameValid: false,
      passwordValid: false,
      emailValid: false
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
  }
  handleOnChange = (event) => {
    // console.log(event);
    let { name, value } = event.target;
    //event.target.name;
    // [name]: value
    // this.setState({ [event.target.name]: event.target.value }, () => {
    //   console.log(this.state);
    //   values: {...this.state.value}
    // });
    this.setState({
      values: { ...this.state.values, [name]: value }
    })
  }
  handleOk() {
    console.log("handle Okk");
  }
  handleErrors = event => {
    let { name, value } = event.target;
    console.log("test");
    let message = value === "" ? name + "Khong duoc rong" : "";
    let { usernameValid, passwordValid, emailValid } = this.state;
    console.log(message);
    switch (name) {
      case "username":
        usernameValid = message !== "" ? false : true;
        if (value !== "" && value.length < 4) {
          usernameValid = false;
          message = "vui long nhap lon hon 4 ky tu";
        }
        case "password":
          passwordValid = message !== ""? false : true;
          break;
        case "email":
          emailValid = message !== "" ? false : true;
          if (value !== "" &&  !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            message = "Email khong hop le";
            emailValid = false;
          }
      default:
        break
    }
    this.setState ({
      error: {...this.state.error, [name]: message},
      usernameValid,
      passwordValid,
      emailValid
    },this.formValidation(), () => console.log(this.state.error))
    
  }
  formValidation = () => {
      this.setState({
        formValid: this.state.usernameValid && this.state.passwordValid && this.state.emailValid  
      }, () => {
        console.log(this.state);
        
      })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h3>Form Validation</h3>
            <form onSubmit={this.handleOnSubmit}>
              <div className="form-group">
                <label htmlFor>Username</label>
                <input type="text" className="form-control" name="username" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} />
                {this.state.error.username !== "" ? <div className = "alert alert-danger">{this.state.error.username}</div> : ""}
              </div>
              <div className="form-group">
                <label htmlFor>Password</label>
                <input type="text" className="form-control" name="password" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} />
              </div>
              <div className="form-group">
                <label htmlFor>Email</label>
                <input type="email" className="form-control" name="email" onChange={this.handleOnChange} onBlur={this.handleErrors} onKeyUp={this.handleErrors} />
              </div>
              <button disabled={!this.state.formValid} type="submit" className="btn btn-success" onChange={this.handleOnChange}>
                Submit
              </button>
              <button className="btn btn-info" onClick={this.handleOk}>Ok</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
