import React from 'react';
import './App.css';
import CharacterInfoPane from './Components/CharacterInfoPane.js';
import CombatOrderPane from './Components/CombatOrderPane.js';
import ToolsPane from './Components/ToolsPane.js';

class MainApp extends React.Component {
  constructor(){
    super();
    this.state = {
      characterData : [],
      sortedCharacters : [],
      renderCombat : false,
      toolData : [],
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.determineCombatOrder = this.determineCombatOrder.bind(this);
    this.endCombat = this.endCombat.bind(this);
    this.removeCharacter = this.removeCharacter.bind(this);
    this.addToCombat = this.addToCombat.bind(this);
  }
  
  //Handles all character data changes 
  handleChange(cardState) {
    var matchFound = false;
    for (var i = 0; i < this.state.characterData.length; i++) {
      var character = this.state.characterData[i];
      if (character.name === cardState.name) {
        var temp = this.state.characterData.slice();
        temp[i] = cardState;
        this.setState({characterData : temp})
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

  removeCharacter(target) {
      for(var i = 0; i < this.state.characterData.length; i++) {
        var character = this.state.characterData[i];
        if (character.name === target.name && character.modifier === target.modifier) {
          var temp = this.state.characterData.slice();
          temp.splice(i,1);
          this.setState({characterData : temp})
        }
      }
  }

  renderCombatPane() {
    if (this.state.renderCombat) {
      return (
          <CombatOrderPane 
            sortedCharacters = {this.state.sortedCharacters}
            endCombat = {this.endCombat}
            toolData = {this.state.toolData}
          />
      )
    }
  }

  addToCombat(data) {
    var temp = [];
    temp = this.state.toolData.slice();
    temp.push(data);
    this.setState({toolData : temp});
  }

  endCombat() {
    if(this.state.renderCombat) {
      this.setState({renderCombat : false});
    } 
  }
  
  render() {
    return (
      <div className="appContainer">
        <div className="header">

        </div>
        <div className="characterInfoPaneContainer">
          <CharacterInfoPane 
            characterData = {this.state.characterData}
            handleChange = {this.handleChange}
            determineCombatOrder = {this.determineCombatOrder}
            removeCharacter = {this.removeCharacter}
          />
        </div>
        <div className="comabatOrderPaneContainer">
          {this.renderCombatPane()}
        </div>
        <div className="toolsPane">
          <ToolsPane
            onSubmit = {this.addToCombat}
          />
        </div>
      </div>
    )
  }
}

export default MainApp;