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
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.renderCombatOrder = this.renderCombatOrder.bind(this);
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

  determineCombatOrder(characters){
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

  renderCombatOrder(){
    var sortedCharacters = this.determineCombatOrder(this.state.characterData);
    this.setState({sortedCharacters : sortedCharacters});
  }

  
  render() {
    const combatOrderState = () => {
      return(
        <CombatOrderPane 
          sortedCharacters = {this.sortedCharacters}
        />
      )
    }

    return (
      <div className="container">
        <div className="characterInfo">
          <CharacterInfoPane 
            characterData = {this.state.characterData}
            handleChange = {this.handleChange}
          />
          <button onClick={this.renderCombatOrder}>Start Combat</button>
        </div>
        <div className="combatOrder">
          {combatOrderState}
        </div>
      </div>
    )
  }
}

export default MainApp;
