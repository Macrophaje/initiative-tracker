import React, { Component } from 'react';
import ActivePlayer from './ActivePlayer';

class CombatOrderPane extends React.Component {
	constructor(){
		super();
	}

	render() {
		return(
			<div>
				<div>
					<ActivePlayer />
				</div>
			</div>
		);
	}
}

export default CombatOrderPane;