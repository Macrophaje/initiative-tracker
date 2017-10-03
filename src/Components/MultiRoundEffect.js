import React from 'react';

class MultiRoundEffect extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			effectName : props.details.effectName,
			remainingRounds : props.details.roundValue,
			previousRounds : props.round,
			currentRound : props.round,
			key : props.details.key,
		}

		this.updateRemainingRounds = this.updateRemainingRounds.bind(this);
		this.checkIfEffectOver = this.checkIfEffectOver.bind(this);
	}

	componentWillReceiveProps(props) {
		this.setState({currentRound : props.round}, 
			this.updateRemainingRounds
		);				
	}

	updateRemainingRounds(){
		if (this.state.previousRounds !== this.state.currentRound) {
			var rem = this.state.remainingRounds - 1;
			this.setState({remainingRounds : rem},
				this.checkIfEffectOver
			);
		}
		this.setState({previousRounds : this.props.round});
	}

	checkIfEffectOver(){
		if (this.state.remainingRounds <= 0) {
			this.props.removeToolFromCombat(this.state);
		}
	}

	render() {
		return (
			<div>
				<p>{this.state.effectName}</p>
				<p>Rounds Remaining: {this.state.remainingRounds} </p>
			</div>
		);
	}
}

export default MultiRoundEffect;