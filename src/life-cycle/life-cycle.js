import React, { Component } from 'react'
import Child from './child';
import Pure from './pure';

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Phuc"
        }
        console.log("constructor");
    }
    componentWillMount() {
        console.log("componentwillmount");
    }
    componentDidUpdate() {
        console.log("componentdidupdate")
    }
    componentDidMount() {
        console.log("componentDidmount");
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     console.log(nextProps);
    //     console.log(nextState);
    //     if (nextState.username === "Phuc Pham") {
    //         return false;
    //     }
    //     return true;
    // } // ngan update
    componentWillReceiveProps(nextProps){
        console.log("componentwillreceiveprops");
    }
    render() {
        console.log("render");
        return (
            <div>
                LifeCycle
                <button className="btn btn-success" onClick={() => {
                    this.setState({
                        username: "Phuc Pham"
                    })
                }}></button>
                <h3> username: {this.state.username}</h3>
                <Child username ={this.state.username}/>
                <Pure/>
            </div>
        )
    }
}
