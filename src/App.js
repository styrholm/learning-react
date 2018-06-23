import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#333'
let defaultStyle = {
  color : defaultTextColor
}

let fakeServerData = {
  user: 'Styrbjörn',
  playlists: [
    {
      name: 'Songs chosen by Styrbjörn',
      songs: ['Let Yourself Down', 'After Rain', 'Broken']
    },
    {
      name: 'Songs chosen by Marthe',
      songs: ['Searchlight', 'I am not the only traveller', 'Girl from the sea']
    },
    {
      name: 'Travel songs',
      songs: ['Crete', 'Home', 'Better with you']
    },
    {
      name: 'Travel songs v2',
      songs: ['Crete', 'Home', 'Better with you']
    }
  ]

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
      <div style={{...defaultStyle, width:"25%", display:'inline-block'}}>
        <img/>
        <h3 style={{'text-align':'left'}}> Playlist name</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>

      </div>
    );
  }
}

class App extends Component {

  constructor() {
    super()
    this.state = {serverData : {}}
  }

  componentDidMount() {
    this.setState({serverData : fakeServerData})
  }

  render() {
    
    return (
      <div className="App">
        <h1>
          { this.state.serverData.user && 
            this.state.serverData.user.name}'s playlist          
        </h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
