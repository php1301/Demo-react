import React, { Component } from 'react'
export default class Example extends Component {
    username = "Phuc";
    isLogin = false;
    // renderHTML = () => {
    //     if(this.isLogin){
    //         return <div>Hello {this.username}</div>;
    //     }
    //     else{
    //         return <button className="btn btn-success">Login</button>
    //     }
    // };
    renderHTML = () => {
        return this.isLogin ? (<div> Hello {this.username}</div>) : (<button className="btn btn-success" onClick={this.handleLogin}>Login</button>);
    };
    render() {
        return (
            <div>Example Events bbb {this.renderHTML()}</div>

        )
    }
}