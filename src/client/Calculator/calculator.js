import React, { Component } from 'react'
import './calculator.css'

const DisplayMessage = (props) => {
	return (
		<div>
			<h1 className="text-center">Caculator</h1>
			<h1 className="well well-sm" id="calc-field">{parseFloat(props.display)}</h1>
		</div>
		)
}

const GenerateKeys = (props) => {
	let buttons = []
	for (let i = 0; i < props.value.length; i++ ) {
		buttons.push(
				<button type="button" value={props.value[i]} key={props.value[i]} className="btn btn-primary" onClick={props.click}>{props.value[i]}</button>)
	}
	return buttons
}

const calculate = (val1, val2, symbol) => {
	console.log(eval(val1+symbol+val2))
	return val1+symbol+val2
}

export default class Calculator extends Component {
	constructor(props){
		super(props)
		this.state = {
			display_value: 0,
			stored_value: 0,
			button_val: "",
			// \u00F7 is division key
			first_row: ['CE','C','DELETE','\u00F7'],
			//  \u002A = multiplication symbol
			second_row: [7, 8, 9, '\u002A'],
			// \u002D = minus symbol
			third_row: [4, 5, 6, '\u002D'],
			// \u002B = is adition symbol
			fourth_row: [1, 2, 3, '\u002B'],
			// \u00B1 = plus/minus sign, \u002E = dot symbol, \u003D = is equal sign
			fif_row: ['\u00B1', 0, '\u002E', '\u003D']
		}
		this.handleClick = this.handleClick.bind(this);
	}



	handleClick = (event) =>{
		if(Number(event.target.value) || event.target.value == 0){
			console.log(event.target.value)
			this.setState({
				display_value: this.state.display_value + event.target.value
			})
		}
		else {
			if(event.target.value == "C"){
				this.setState({
					display_value: 0,
					stored_value: 0
				})
			}
			else if(event.target.value == "CE"){
				this.setState({
					display_value:0
				})
			}
			else if(event.target.value == "\u003D"){
				let total = calculate(parseInt(this.state.stored_value), parseInt(this.state.display_value), this.state.button_val)
				this.setState({
					display_value: total
				})	
			}
			else {
				this.setState({
					stored_value: this.state.display_value,
					display_value: 0,
					button_val: event.target.value
				})

			}
		}
		// let holder = this.state.display_value
		// this.setState({
		// 	display_value: holder + event.target.innerHTML
		// })
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