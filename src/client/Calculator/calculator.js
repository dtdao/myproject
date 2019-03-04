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

const GenerateKeys = (props) => {
	let buttons = []
	for (let i = 0; i < props.value.length; i++ ) {
		buttons.push(
				<button type="button" key={props.value[i]} className="btn btn-primary" onClick={props.click}>{props.value[i]}</button>)
	}
	return buttons
}

export default class Calculator extends Component {
	constructor(props){
		super(props)
		this.state = {
			display_value: 0,
			stored_value: 0,
			first_row: ['CE','C','DELETE','\u00F7'],
			second_row: [7, 8, 9, '\u002A'],
			third_row: [4, 5, 6, '\u002D'],
			fourth_row: [1, 2, 3, '\u002B'],
			fif_row: ['\u00B1', 0, '\u002E', '\u003D']
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (event) =>{
		let holder = this.state.display_value
		this.setState({
			display_value: holder + event.target.innerHTML
		})
	}

	render(){
		const {display_value, first_row, second_row, third_row, fourth_row, fif_row} = this.state
		return(
				<div className="container">
					<div className="row justify-content-md-center">
						<div className="well">
							<div className="col-xs-6 col-xs-offset-3">
								<DisplayMessage display={display_value} />
								<div className="btn-group btn-block">
									<GenerateKeys value={first_row} click={this.handleClick}/>
								</div>
								<div className="btn-group btn-block">
									<GenerateKeys value={second_row} click={this.handleClick}/>									
								</div>
								<div className="btn-group btn-block">
									<GenerateKeys value={third_row} click={this.handleClick}/>
								</div>
								<div className="btn-group btn-block">
									<GenerateKeys value={fourth_row} click={this.handleClick}/>
								</div>
								<div className="btn-group btn-block">
									<GenerateKeys value={fif_row} click={this.handleClick}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
	}	

}