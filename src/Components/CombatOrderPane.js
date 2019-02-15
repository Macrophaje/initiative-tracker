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

		this.nextTurn = this.nextTurn.bind(this);
		this.showActivePlayer = this.showActivePlayer.bind(this);
		this.updateRemainingRounds = this.updateRemainingRounds.bind(this);
		this.resortPlayers = this.resortPlayers.bind(this);
	}

	nextTurn() {
		if (this.state.turn + 1 === this.props.sortedCharacters.length) {
			this.setState({
				round : this.state.round+1,
				turn : 0,
			}, this.triggerNextRound);
		} else {
			this.setState({turn : this.state.turn+1}, this.showActivePlayer);
		}
		
	}

	showActivePlayer() {
		this.setState({activePlayer : this.props.sortedCharacters[this.state.turn]})
	}

	resortPlayers() {
		debugger;
		this.props.determineCombatOrder();
		this.showActivePlayer();
	}

	triggerNextRound() {
		this.showActivePlayer();
		if (this.props.toolData.length >= 1) {
			this.updateRemainingRounds();
		}
	}

	updateRemainingRounds(){
		var newToolData = this.props.toolData.filter(function(tool) {
			return (tool.roundValue - 1 > 0);
		});
		newToolData.forEach(function(tool){
			tool.roundValue -= 1;
		});
		this.props.updateToolData(newToolData);
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

		return(
			<div className="combatOrderPane">
				<h2><b>Battle!</b></h2>
				<div>
					Round: {this.state.round}
					&nbsp;&nbsp;&nbsp;   
					Turn: {this.state.turn + 1}
				</div>
				<div className="MultiRoundEffectContainer">
					{multiEffectCards}
				</div>
				<div>
					<ActivePlayer 
						player = {this.state.activePlayer}
					/>
				</div>
				<div>
					<button onClick={this.nextTurn}>Next Turn</button>
					<button onClick={this.resortPlayers}>Resort Players</button>
					<button onClick={this.props.endCombat}>End Combat</button>
				</div>
			</div>
		);
	}
}

export default CombatOrderPane;