import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#333'
let defaultStyle = {
  color : defaultTextColor
}

let fakeServerData = {
  user: {
    name: 'Styrbjörn Holmberg', 
    playlists: [
      {
        name: 'Songs chosen by Styrbjörn',
        songs: [
          {name: 'Let Yourself Down', duration: 438},
          {name: 'After Rain', duration: 370}, 
          {name: 'Broken', duration: 280}]
      },
      {
        name: 'Songs chosen by Marthe',
        songs: [
          {name: 'Searchlight', duration: 321},
          {name: 'I am not the only traveller', duration: 281},
          {name: 'Girl from the sea', duration: 178}]
      },
      {
        name: 'Travel songs',
        songs: [
          {name: 'Crete', duration: 310},
          {name: 'Home', duration: 233}, 
          {name: 'Better with you', duration: 247}]
      },
      {
        name: 'Travel songs v2',
        songs: [ 
          {name: 'Crete', duration: 310},
          {name: 'Home', duration: 233}, 
          {name: 'Better with you', duration: 247}]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width:'40%', display:'inline-block'}}>
        <h2>{this.props.playlists.length} Text</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return Math.ceil((sum + eachSong.duration)/3600)
    }, 0)
    return (
      <div style={{...defaultStyle, width:'40%', display:'inline-block'}}>
        <h2>{totalDuration} Hours</h2>
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
    setTimeout(() => {
    this.setState({serverData : fakeServerData})
    }, 1000)
  }

  render() {
    
    return (
      <div className="App">
       { this.state.serverData.user ?
       <div> 
          <h1>{this.state.serverData.user.name}'s playlist          
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
      </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
