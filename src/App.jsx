import React, { Component } from 'react';
import logo from './images/my_picture.JPG';
import './styles/App.scss';
import FancyIconRow from './components/FancyIconRow';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <FancyIconRow />
      </div>
    );
  }
}

export default App;
