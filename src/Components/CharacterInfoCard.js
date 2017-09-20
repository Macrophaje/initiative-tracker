import React from 'react';
import '../Styles/CharacterInfoCard.css';

//Displays the details of a character, allows the user to enter their roll and calculates final initiative
class CharacterInfoCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : props.name,
			modifier : props.modifier,
			roll : null,
			initiative: null,
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.removeCharacter = this.removeCharacter.bind(this);
	}
	
	//Updates the state of the cmp as the Roll field is edited
	handleChange(event) {
		this.setState({roll : event.target.value});
	}
	
	//Calculates the final initiative
	handleClick() {
		var mod = parseInt(this.state.modifier, 10);
		var roll = parseInt(this.state.roll, 10);
		//Don't allow user to submit an impossible roll
		if(roll < 1 || roll > 20 || isNaN(roll)) {
			return;
		}
		
		var initiative = mod + roll;
		if (initiative < 0) {
			initiative = 0
		};
		this.setState({
			initiative:initiative}, 
			function(){
				this.submitInitiative()
			}
		);
	}
	
	//Sends the calculated initiative to the parent component
	submitInitiative() {
		this.props.handleChange(this.state);
	}

	removeCharacter(){
		this.props.removeCharacter(this.state);
	}
	
	render(){
		return(
			<div className="characterInfoCard">
				<div>
					<p>Name: {this.state.name}</p>
					<p>Initiative Modifier: {this.state.modifier}</p>
					Roll:
					<input type="number" name="initiativeRoll" onChange= {this.handleChange} />
					<button type="button" onClick= {this.handleClick}>OK</button>
					<p>Initiative: {this.state.initiative}</p>
				</div>
				<div>
					<button type="button" onClick={this.removeCharacter}>X</button>
				</div>
			</div>
			
		);
	}
}

export default CharacterInfoCard;