import React from 'react'
import MultiRoundEffectCreator from './MultiRoundEffectCreator'

class ToolsPane extends React.Component {

	handleSubmit(data){
		this.props.onSubmit(data);
	}

	render() {
		return (
			<div className="toolsPane">
				<div className="multiRoundEffectCreatorContainter">
					<MultiRoundEffectCreator 
						onSubmit = {(data) => {
							this.handleSubmit(data)
						}}
					/>
				</div>
			</div>
		)
	}
}

export default ToolsPane;