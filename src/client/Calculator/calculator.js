import React, { Component } from 'react'
import './calculator.css'


const DisplayMessage = (props) => {
	return (
		<div>
			<h1 className="text-center">Caculator</h1>
			<h1 className="well well-sm" id="calc-field">{props.display}</h1>
		</div>
		)
}

const GenerateKeys = () => {
	let buttons = []
	for (let i = 0; i < 20; i++ ) {
		buttons.push(<button key={i+1}>{i+1}</button>)
	}
	return buttons

}

export default class Calculator extends Component {
	constructor(props){
		super(props)
		this.state = {
			display_value:0

		}
	}

	render(){
		const {display_value} = this.state
		return(
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="well">
							<div className="col-xs-6 col-xs-offset-3">
								<DisplayMessage display={display_value} />
								<GenerateKeys />
							</div>
						</div>
					</div>
				</div>
			)
	}	

}