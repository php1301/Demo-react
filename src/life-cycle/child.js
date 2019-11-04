import React, { Component } from 'react'


export default class Child extends Component {
    componentDidMount(){
        console.log("componentDidmount");
        // willmount chi chay 1 lan duy nhat

    }
    componentWillReceiveProps(nextProps){
        console.log("componentwillreceiveprops");
        console.log(nextProps);
    }
    render() {
        console.log("render");
        return (
            <div>
                Child: {this.props.username}
            </div>
        )
    }
}
