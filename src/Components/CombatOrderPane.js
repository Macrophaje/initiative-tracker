import React from 'react';
import ActivePlayer from './ActivePlayer';
import MultiRoundEffect from './MultiRoundEffect';
import '../Styles/CombatOrderPane.css'

class CombatOrderPane extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			turn : 0,
			round : 1,
			activePlayer: props.sortedCharacters[0],
		}

		this.showActivePlayer = this.showActivePlayer.bind(this);
		this.nextTurn = this.nextTurn.bind(this);
		this.removeToolFromCombat = this.removeToolFromCombat.bind(this);
	}

	componentWillReceiveProps(props) {
		
	}

	showActivePlayer() {
		this.setState({activePlayer : this.props.sortedCharacters[this.state.turn]})
	}

	nextTurn() {
		if (this.state.turn + 1 === this.props.sortedCharacters.length) {
			this.setState({
				round : this.state.round+1,
				turn : 0,
			}, this.showActivePlayer);
		} else {
			this.setState({turn : this.state.turn+1}, this.showActivePlayer);
		}
		
	}

	removeToolFromCombat(name) {
		this.props.removeToolFromCombat(name);
	}

	render() {
		const multiEffectCards = this.props.toolData.map((data) => {
			if (data.toolName === 'multi') {
				return (
					<MultiRoundEffect 
						details = {data}
						round = {this.state.round}
						key = {data.key}
						removeToolFromCombat = {this.removeToolFromCombat}
					/>
				);
			} else {
				return null;
			}	
		});

		const activePlayer = 
			<ActivePlayer 
				player = {this.state.activePlayer}
			/>;

		return(
			<div className="combatOrderPane">
				<div>
					Round: {this.state.round}
				</div>
				<div>
					{multiEffectCards}
				</div>
				<div>
					{activePlayer}
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