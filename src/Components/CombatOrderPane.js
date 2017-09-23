import React from 'react';
import ActivePlayer from './ActivePlayer';
import MultiRoundEffect from './ActivePlayer';
import '../Styles/CombatOrderPane.css'

class CombatOrderPane extends React.Component {
	constructor(props){
		super(props);
		this.componentWillReceiveProps(props);

		this.showActivePlayer = this.showActivePlayer.bind(this);
		this.nextTurn = this.nextTurn.bind(this);
	}

	componentWillReceiveProps(props) {
		this.state = {
			sortedCharacters : props.sortedCharacters,
			turn : 0,
			round : 1,
			activePlayer: props.sortedCharacters[0],
		}

	}

	showActivePlayer() {
		this.setState({activePlayer : this.state.sortedCharacters[this.state.turn]})
	}

	nextTurn() {
		if (this.state.turn + 1 === this.state.sortedCharacters.length) {
			this.setState({
				round : this.state.round+1,
				turn : 0,
			}, this.showActivePlayer);
		} else {
			this.setState({turn : this.state.turn+1}, this.showActivePlayer);
		}
		
	}

	render() {
		const multiEffectCards = this.props.toolData.map((data) => {
			return (
				<MultiRoundEffect 
					details = {data}
					round = {1}
					key = {data.multi.effectName}
				/>
			);
		});

		return(
			<div className="combatOrderPane">
				<div>
					Round: {this.state.round}
				</div>
				<div>
					{multiEffectCards}
				</div>
				<div>
					<ActivePlayer 
						player = {this.state.activePlayer}
					/>
				</div>
				<div>
					<button onClick={this.nextTurn}>Next Turn</button>
					<button onClick={this.props.endCombat}>End Combat</button>
				</div>
			</div>
		);
	}
}

export default CombatOrderPane;