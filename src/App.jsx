import React, { Component } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Body from './components/Body';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'
import ContactForm from './components/ContactForm';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Body} />
            <Route path="/inquiry" component={ContactForm} />

          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
