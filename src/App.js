import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterInfoPane from './Components/CharacterInfoPane.js';
import CombatOrderPane from './Components/CombatOrderPane.js';

class MainApp extends React.Component {
  constructor(){
    super();
    this.state = {
      characterData : [],
    }
    
    this.handleChange = this.handleChange.bind(this);
  }
  
  //Handles all character data changes 
  handleChange(cardState) {
    var matchFound = false;
    for (var i = 0; i < this.state.characterData.length; i++) {
      var character = this.state.characterData[i];
      if (character.name === cardState.name) {
        this.state.characterData[i] = cardState;
        matchFound = true;
      }
      if(matchFound) {
        break;
      }
    }
    if (!matchFound) {
      var newCharacterData = this.state.characterData.slice();
      newCharacterData.push(cardState);
      this.setState({characterData : newCharacterData});
    }
  }

  
  render() {
    return (
      <div className="container">
        <div className="characterInfo">
          <CharacterInfoPane 
            characterData = {this.state.characterData}
            handleChange = {this.handleChange}
          />
        </div>
        <div className="combarOrder">
          <CombatOrderPane />
        </div>
      </div>
    )
  }
}

export default MainApp;
