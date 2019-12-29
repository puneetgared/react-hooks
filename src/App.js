import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import { Todo } from './Todo/TodoHooks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        {/* <Greeting></Greeting>     */}
        <Todo></Todo>
        </header>
        
      </div>
      
    );
  }
}

export default App;
