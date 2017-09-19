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
  }
	
	componentWillReceiveProps(props) {
		this.state = {
			characterData : props.characterData.slice(),
		}		
	}
	
	//Adds the inputed character info the the state
	handleSubmit(characterData) {
		this.props.handleChange(characterData);
	}

	//Adds the initiative from the Info card to the state.
	handleChange(cardState) {
		this.props.handleChange(cardState);
	}

	//Render the input cards
  	renderInputCard() {		
    	return (
      		<CharacterInfoInput
        		onSubmit = {this.handleSubmit}
      		/>
    	)
  	}
  
  	render() {
	//Renders the Info card from the state
		const infoCards = this.state.characterData.map((character) => {
			return(
				<CharacterInfoCard 
					name = {character.name}
					modifier = {character.modifier}
					handleChange = {this.handleChange}
					key = {character.name}
				/>
			);
		});
		
    	return (
			<div className="characterInfoPane">
				<div >
					{infoCards}
				</div>
				<div >
					{this.renderInputCard()}
				</div>
				<div className="startCombatButton">
					<button onClick={this.props.determineCombatOrder}>Start Combat</button>
				</div>
			</div>
    	);
  	}
}

export default CharacterInfoPane;