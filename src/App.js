import React from 'react';
import logo from './logo.svg';
import './App.css';
// import BaiTap1 from './components/baitap1';
import Baitap2 from './components/baitap2/baitap2';
import Baitap3 from './components/baitap3/baitap3';
import Baitap4 from '.'
import ABC from './renderingelements/rendering-elements';
import Handling from './handling-event/handling-event';
import Example from './handling-event/example-event';
import State from './state/state';
import BaitapCar from './handling-event/baitap-car';
import Listkeys from './handling-event/list-key';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import LiftState from './components/baitapgiohang/lifting-state-up-cart';
import Home from './components/user-managerment/Home';
import HomeRedux from './components/user-management-redux/Home';
import LifeCycle from './life-cycle/life-cycle';
import FormValidation from './form-validation/form-validation';
function App() {
  return (
    <div>
      {/* <BaiTap1 /> */}
      {/* <Baitap2 /> */}
      {/* <Baitap3 /> */}
      {/* <br />
      <br />
      <br />
      <ABC/>
      <br />
      <br />
      <br />
      <Handling/>
      <br />
      <br />
      <br />
      <Example/>
      <br />
      <br />
      <State/>
      <br />
      <BaitapCar/>
      <Listkeys/> */}
      {/* <HomeScreen/> */}
      {/* <LiftState/>
      <Home/>
      <HomeRedux/> */}
      <LifeCycle/>
      <FormValidation/>
    </div>
  );
}

export default App;
