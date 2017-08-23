import React from 'react';

class ActivePlayer extends React.Component {

	render(){
		return (
			<div>
				<p>{this.props.player.name}</p>
				<p>{this.props.player.initiative}</p>
			</div>
		)
	}
}

export default ActivePlayer;