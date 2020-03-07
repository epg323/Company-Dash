import React from 'react';
import logo from './logo.svg';
import './App.css';
import Thermometor from 'react-thermometer-ecotropy';

function App() {
  return (
    <div>
      <div className="App">
        <h1>Emerging Markets BigCommerce Dash</h1>
        <h2>Goal: 2245</h2>
      </div>
      <div className="Therm">
        <Thermometor
          theme="light"
          value="1891"
          max="2274"
          size="large"
          height="300"
        />
      </div>
    </div>
  );
}

export default App;
