import React from 'react';
import ActivePlayer from './ActivePlayer';

class CombatOrderPane extends React.Component {
	constructor(props){
		super();
		this.state = {
			sortedCharacters : props.sortedCharacters,
			turn : 0,
			round : 0,
			activePlayer: {},
		}
		this.componentWillReceiveProps(props);
		this.showActivePlayer = this.showActivePlayer.bind(this);
	}

	componentWillReceiveProps(props) {
		this.state = {
			sortedCharacters : props.sortedCharacters,
		}
	}

	showActivePlayer() {
		this.setState({activePlayer : this.sortedCharacters[this.turn]})
	}

	nextTurn() {
		if (this.turn++ === this.sortedCharacters.length) {
			this.round++;
			this.turn = 0;
		} else {
			this.turn++;
		}
		this.showActivePlayer();
	}

	render() {
		debugger;
		this.showActivePlayer();
		return(
			<div>
				<div>
					<ActivePlayer 
						player = {this.activePlayer}
					/>
				</div>
				<div>
					<button onClick={this.nextTurn}>Next Turn</button>
				</div>
			</div>
		);
	}
}

export default CombatOrderPane;