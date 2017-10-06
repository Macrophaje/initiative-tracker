import React from 'react'
import MultiRoundEffectCreator from './MultiRoundEffectCreator'
import '../Styles/ToolsPane.css'

class ToolsPane extends React.Component {

	handleSubmit(data){
		this.props.onSubmit(data);
	}

	render() {
		return (
			<div className="toolsPane">
				<h3><b>Tools</b></h3>
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