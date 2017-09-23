import React from 'react';
import '../Styles/CharacterInfoPane.css';
import CharacterInfoInput from './CharacterInfoInput';
import CharacterInfoCard from './CharacterInfoCard';

class CharacterInfoPane extends React.Component {
	constructor(props){
	    super(props);
		this.componentWillReceiveProps(props)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.removeCharacter = this.removeCharacter.bind(this);
	}
	
	componentWillReceiveProps(props) {
			
	}
	
	//Passes the character data to the parent componet
	handleSubmit(characterData) {
		this.props.handleChange(characterData);
	}

	//Passes data changes to the parent component
	handleChange(cardState) {
		this.props.handleChange(cardState);
	}

	//Render the input cards
  	

  	//Passes the character to be removed to the parent component
  	removeCharacter(target) {
  		this.props.removeCharacter(target);
  	}
  
  	render() {
	//Renders the Info card from the state
		const infoCards = this.props.characterData.map((character) => {
			return(
				<CharacterInfoCard 
					name = {character.name}
					modifier = {character.modifier}
					handleChange = {this.handleChange}
					key = {character.name}
					removeCharacter = {this.removeCharacter}
				/>
			);
		});
		
    	return (
			<div className="characterInfoPane">
				<div >
					{infoCards}
				</div>
				<div >
					<CharacterInfoInput
        				onSubmit = {this.handleSubmit}
      				/>
				</div>
				<div className="startCombatButton">
					<button onClick={this.props.determineCombatOrder}>Start Combat</button>
				</div>
			</div>
    	);
  	}
}

export default CharacterInfoPane;