import React from 'react'

class MultiRoundEffectCreator extends React.Component {
	constructor() {
		super();
		this.state = {
			effectName : '',
			roundValue : 1,
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

	handleSubmit(event) {
		event.preventDefault();

		//Don't allow user to submit a character with no name
		if (!this.state.effectName || this.state.roundValue <= 0) {
			return;
		}

		this.props.onSubmit(Object.assign({},this.state));
		this.setState({
			effectName : '',
			roundValue : 1,
		});

	}
	
	render() {
		return (
			<div>
				<h3>Add Multi-round Effect</h3>
				<form id="effectInfoInputForm" ref="form" onSubmit={this.handleSubmit}>
					Effect Name: 
					<input type="text" name="effectName" id="effectName" value={this.state.effectName} onChange={this.handleChange}/><br/>
					Number of Rounds: 
					<input type="number" name="roundValue" id="roundValue" value={this.state.roundValue} onChange={this.handleChange}/><br/>
					<input type="submit" value="Add" />
				</form>

			</div>
		)
	}
}

export default MultiRoundEffectCreator;