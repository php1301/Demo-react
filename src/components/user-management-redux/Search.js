import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions/index";
class Search extends Component {
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={(e) => {this.props.onFilter(e.target.value)}}/>;
  }
}
// day du lieu thi dispatch to props
const mapDispatchToProps = dispatch => {
  return {
    onFilter: keyword =>{
      // let action = {
      //   type: "FILTER",
      //   keyWord : keyword
      // }
      dispatch(action.actOnFilter(keyword))
    }
  }
}
export default connect(null, mapDispatchToProps)(Search);
