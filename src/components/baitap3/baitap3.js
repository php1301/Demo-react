import React, {Component} from 'react';
import Header from './header';
import Carousel from './carousel';
import Smartphone from './smartphone';
import Laptop from './laptop';
export default class Baitap3 extends Component{
    render(){
        return(
        <div>
            <Header/>
            <Carousel/>
            <Smartphone/>
            <Laptop/>
        </div>
        )
    }
}