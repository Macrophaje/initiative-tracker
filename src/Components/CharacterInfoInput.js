import React from 'react';

//Component for user to define each character
class CharacterInfoInput extends React.Component {
	constructor() {
		super();
		this.state = {
			name : '',
			modifier : 0,
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	//Updates the state of the cmp as the fields are edited
	handleChange(event) {
		var input = { };
		input[event.target.id] = event.target.value;
		this.setState(input);
	}
	
	//Sumbits the final character details to the parent cmp
	handleSubmit(event){
		event.preventDefault();
		//Don't allow user to submit a character with no name
		if (!this.state.name) {
			return;
		}
		
		this.props.onSubmit(Object.assign({},this.state));
		this.state.name = '';
		this.state.modifier = 0;
	}
	
	render () {
		return (
			<form id="characterInput" ref="form" onSubmit={this.handleSubmit}>
				Character Name: 
				<input type="text" name="characterName" id="name" value = {this.state.name} onChange={this.handleChange}/><br/>
				Initiative Modifer:
				<input type="number" name="initiativeModifer" id="modifier" value= {this.state.modifier} onChange={this.handleChange}/><br/>
				<input type="submit" value="OK"/>
			</form>
		);
	}
}
export default CharacterInfoInput;