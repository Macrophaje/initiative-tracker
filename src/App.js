import React from 'react';
import './App.css';
import CharacterInfoPane from './Components/CharacterInfoPane.js';
import CombatOrderPane from './Components/CombatOrderPane.js';

class MainApp extends React.Component {
  constructor(){
    super();
    this.state = {
      characterData : [],
      sortedCharacters : [],
      renderCombat : false,
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.determineCombatOrder = this.determineCombatOrder.bind(this);
    this.endCombat = this.endCombat.bind(this);
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

  determineCombatOrder(){
    if (this.state.characterData.length < 1 || this.state.renderCombat === true) {
      return;
    }
    var sortedCharacters = this.sortCharacters(this.state.characterData);
    this.setState({
      sortedCharacters : sortedCharacters,
      renderCombat : true,
    });
  }

  sortCharacters(characters){
    var sortedCharacters = characters.slice();
    function compareInitiative(a,b) {
      if (a.initiative > b.initiative) {
        return -1;
      } else if ( a.initiative < b.initiative) {
        return 1;
      } else if (a.initiative === b.initiative) {
        if (a.modifier > b.modifer) {
          return -1;
        } else if (a.modifer < b.modifer) {
          return 1;
        }
      }
      return 0;
    }
    return sortedCharacters.sort(compareInitiative);  
  }

  renderCombatPane() {
    if (this.state.renderCombat) {
      return (
          <CombatOrderPane 
            sortedCharacters = {this.state.sortedCharacters}
          />
      )
    }
  }

  endCombat() {
    if(this.state.renderCombat) {
      this.setState({renderCombat : false});
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
        <div className="controlButtons">
          <button onClick={this.determineCombatOrder}>Start Combat</button>
          <button onClick={this.endCombat}>End Combat</button>
        </div>
        <div className="combatOrder">
          {this.renderCombatPane()}
        </div>
      </div>
    )
  }
}

export default MainApp;