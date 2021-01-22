import React, { useEffect } from "react";
import {connect} from "react-redux";
import "./App.css";
import {getSmurfs} from './actions/getSmurfs';
import SmurfsDisplay from './components/SmurfsDisplay';
import AddForm from './components/AddForm';

function App(props) {
  useEffect(()=>{
    props.getSmurfs()
  },[]);
 
  return (
    <div className="App">
      <SmurfsDisplay />
      <AddForm />
    </div>
  );
}

export default connect(null, {getSmurfs})(App);
//Task List:
//1. Add in SmurfDisplay and AddForm into your application.