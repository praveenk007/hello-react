import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Greet from './components/greet'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Greet/>
        </header>
      </div>
    );
  }
}

export default App;
