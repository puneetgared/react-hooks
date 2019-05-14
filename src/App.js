import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        <Greeting></Greeting>    
        </header>
        
      </div>
      
    );
  }
}

export default App;
