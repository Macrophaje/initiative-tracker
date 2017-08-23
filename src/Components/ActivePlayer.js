import React from 'react';

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
			<div>
				<p>Name:{this.state.name}</p>
				<p>Initiative:{this.state.initiative}</p>
			</div>
		)
	}
}

export default ActivePlayer;