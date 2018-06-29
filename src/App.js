import React, { Component } from 'react';
import logo from './images/my_picture.JPG';
import './App.css';
import FancyIconRow from './components/FancyIconRow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FancyIconRow />
      </div>
    );
  }
}

export default App;
