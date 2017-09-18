import React from 'react';
import '../Styles/ActivePlayer.css'

class ActivePlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name : props.player.name,
			initiative : props.player.initiative,
		}
	}

	componentWillReceiveProps(props){
		this.setState({
			name : props.player.name,
			initiative : props.player.initiative,
		});
	}

	render(){
		return (
			<div className="activePlayer">
				<p>Name:{this.state.name}</p>
				<p>Initiative:{this.state.initiative}</p>
			</div>
		)
	}
}

export default ActivePlayer;