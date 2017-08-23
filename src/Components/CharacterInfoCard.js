import React, { Component } from 'react';

//Displays the details of a character, allows the user to enter their roll and calculates final initiative
class CharacterInfoCard extends React.Component {
	constructor(props) {
		super();
		this.state = {
			name : props.name,
			modifier : props.modifier,
			roll : null,
			initiative: null,
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	
	//Updates the state of the cmp as the Roll field is edited
	handleChange(event) {
		this.setState({roll : event.target.value});
	}
	
	//Calculates the final initiative
	handleClick() {
		var mod = parseInt(this.state.modifier);
		var roll = parseInt(this.state.roll);
		//Don't allow user to submit an impossible roll
		if(roll < 1 || roll > 20) {
			return;
		}
		
		var initiative = mod + roll;
		this.setState({initiative:initiative}, function(){
									this.submitInitiative()});
	}
	
	//Sends the calculated initiative to the parent component
	submitInitiative() {
		this.props.handleChange(this.state);
	}
	
	render(){
		return(
			<div>
				<p>Name: {this.state.name}</p>
				<p>Initiative Modifier: {this.state.modifier}</p>
				Roll:
				<input type="number" name="initiativeRoll" onChange= {this.handleChange} />
				<button type="button" onClick= {this.handleClick}>OK</button>
				<p>Initiative: {this.state.initiative}</p>
			</div>
		);
	}
}

export default CharacterInfoCard;