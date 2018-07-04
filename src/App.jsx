import React, { Component } from 'react';
import './styles/App.scss';
import FancyIconRow from './components/FancyIconRow';
import Header from './components/Header';
import Body from './components/Body';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Body />
          <FancyIconRow />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
