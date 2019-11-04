import React, { Component } from 'react'
export default class State extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "Phuc",
            isLogin: false,
        }
    }
    // renderHTML = () => {
    //     if(this.isLogin){
    //         return <div>Hello {this.username}</div>;
    //     }
    //     else{
    //         return <button className="btn btn-success">Login</button>
    //     }
    // };
    Login = () => {
        this.setState({
            isLogin: true
        })
    }
    renderHTML = () => {
        return this.state.isLogin ? (<div> Hello {this.state.username}</div>) : (<button className="btn btn-success" onClick={this.Login}>Login</button>);
    };
    render() {
        return (
            <div>State
                {this.renderHTML()}
            </div>

        )
    }
}