import React, { Component } from 'react'
export default class Handling extends Component{
    HandlingEventFunction = () =>{
        console.log("ok");
    }
    HandlingEventParams = name => {
        console.log(name);
    }
    render(){
        return(
            <div>
                <h3>Handling Event</h3>
                <button className="btn btn-success" onClick={this.HandlingEventFunction}>Handling Events</button>
                {/* Khong co tham so nen ham ko co mo dau ngoac tron */}
                <button className="btn btn-danger" onClick={() => {
                    this.HandlingEventParams("Phuc")
                }}> 
                {/* Ham nac danh de truyen tham so co param */}
                Handling Events Params </button>
            </div>
        )
    }
}