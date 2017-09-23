import React from 'react';

class MultiRoundEffect extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			effectName : props.details.effectName
			duration : props.details.roundValue,
			startingRound : {...props.round},
			currentRound : props.round,
		}
	}

	render() {
		return (
			<div>Test</div>
		);
	}
}

export default MultiRoundEffect;