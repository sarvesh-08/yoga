import React from 'react';
import * as tf from '@tensorflow/tfjs';
//import './app.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Profile from './Components/Profile'

async function runModel(){

}
export default function App() {
  return (
    
    <div className="main">
      
    <div className="container mt-5">
    <Profile />
    </div>  
    <h1>App</h1>
      <div className="myButtonPos">
        <button className="myButton">Run model</button>
      </div>
    </div>
    );
}


