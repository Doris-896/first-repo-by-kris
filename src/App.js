import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Greet name="Shiba" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Molly" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Welcome name="Misa" heroName="Wonderwoman"/>
        <Welcome name="Lala" heroName="Zeus"/>
      </div>
    );
  }
}

export default App;