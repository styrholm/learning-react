import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#333'
let defaultStyle = {
  color : defaultTextColor
}

class Aggregate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width:'40%', display:'inline-block'}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{color: defaultTextColor}}>
      <img/>
      <input type="text"/>
      Filter 
      </div>
      
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width:"25%"}}>
        <img/>
        <h3>Playlist name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>

      </div>
    );
  }
}

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1 >Playlist Manager</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
