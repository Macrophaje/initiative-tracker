import React from 'react'
import MultiRoundEffectCreator from './MultiRoundEffectCreator'

class ToolsPane extends React.Component {

	handleSubmit(data, toolname){

		var wrappedData = {	};
		wrappedData[toolname] = data;

		this.props.onSubmit(wrappedData);
	}

	render() {
		return (
			<div className="toolsPane">
				<div className="multiRoundEffectCreatorContainter">
					<MultiRoundEffectCreator 
						onSubmit = {(data) => {
							this.handleSubmit(data, "multi")
						}}
					/>
				</div>
			</div>
		)
	}
}

export default ToolsPane;