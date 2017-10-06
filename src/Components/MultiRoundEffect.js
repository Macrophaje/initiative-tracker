import React from 'react';
import '../Styles/MultiRoundEffect.css'

class MultiRoundEffect extends React.Component {

	render() {
		return (
			<div className="multiRoundEffect">
				<p>{this.props.details.effectName}</p>
				<p>Rounds Remaining: {this.props.details.roundValue} </p>
			</div>
		);
	}
}

export default MultiRoundEffect;