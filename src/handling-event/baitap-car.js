import React, { Component } from 'react'
export default class BaitapCar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: "./img/img/imgRedCar.jpg"
        }
    }
    ChangeColor = (color) => {
        console.log('====================================');
        console.log('test');
        console.log('====================================');
        if (color === "red"){
            
            this.setState({
                img: "./img/img/imgRedCar.jpg"
            })
        }
        if (color === "silver"){
            console.log('red');
            this.setState({
                img: "./img/img/imgSilverCar.jpg"
            })
        }
        if (color === "black"){
            this.setState({
                img: "./img/img/imgBlackCar.jpg"
            })
        }
    }
    render() {
        const style ={
            backgroundColor: "black",
            color: "white"
        }
        return (
            <div>
                <h3 className="ml-2">Bài tập Car</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img className="img-fluid" src={this.state.img} />
                        </div>
                        <div className="col-md-7">
                            <button className="btn btn-danger mr-2" onClick={() => {this.ChangeColor("red")}}>Red</button>
                            <button className="btn mr-2" onClick={() => {this.ChangeColor("silver")}} style={{...style, backgroundColor:"silver"}}>Silver</button>
                            <button className="btn mr-2" onClick={() => {this.ChangeColor("black")}} style={style}>Black</button>
                        </div>
                    </div>
                </div>
                {this.ChangeColor}
            </div>
        )
    }
}