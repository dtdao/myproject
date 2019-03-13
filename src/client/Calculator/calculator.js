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

const calculate = (modVal, storedVal, symbol) => {
	// console.log(eval(val1+symbol+val2))
	// val1 is store value and val2 = mod value
	console.log(storedVal, symbol, modVal)
	if (symbol == "\u00F7" && storedVal != 0 && modVal != 0) return storedVal/modVal
	else if(symbol == "\u002A" && storedVal != 0 && modVal != 0) return storedVal * modVal
	else if(symbol == "\u002D" && storedVal !=0 && modVal != 0) { 
		console.log(storedVal - modVal) 
		return storedVal - modVal
	}
	else if(symbol == "\u002B") return storedVal + modVal
	else return modVal
}

export default class Calculator extends Component {
	constructor(props){
		super(props)
		this.state = {
			display_value: "0",
			stored_value: 0,
			mod_value: 0,
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
		let mathOperators = ["\u00F7", "\u002A", "\u002D", "\u002B"]
		if(Number(event.target.value) || event.target.value == 0){
			this.state.display_value += event.target.value
			this.setState({
				display_value: this.state.display_value
			}, () => {
				console.log({stored_value: this.state.stored_value, mod_value: this.state.mod_value, display: this.state.display_value})
			})
		}
		else {
			// Clear everything
			if(event.target.value == "C"){
				this.setState({
					display_value: 0,
					stored_value: 0,
					mod_value: 0,
					button_val: ""
				})
			}
			//Clear current display value
			else if(event.target.value == "CE"){
				this.setState({
					display_value:0
				})
			}
			//Delete the laste entered digit or do nothing if value is Zero
			else if(event.target.value == "DELETE" && this.state.display_value > 0){
				let holder = this.state.display_value.toString().split("")
				holder.pop()
				this.setState({
					display_value: parseFloat(holder.join(""))
				})
			}
			// This handle all math operations
			else if(mathOperators.includes(event.target.value)){
				// let total = calculate(parseFloat(this.state.stored_value), parseFloat(this.state.display_value), this.state.button_val)
				if (this.state.button_val == ""){
					this.setState({
						stored_value: this.state.display_value,
						button_val: event.target.value,
					})
					this.state.display_value = 0
				}
				else {
					let total = calculate(parseFloat(this.state.display_value), parseFloat(this.state.stored_value), this.state.button_val)
					this.setState({
						stored_value: total, 
						display_value: total,
						button_val: event.target.value
					}, () => {
						this.state.display_value = 0
						console.log("Math Operator pushed and value stored")
					})
				}
			}
			//Handles the solving euqal \u003D is the (=) sign
			else if(event.target.value == "\u003D"){
				if(!this.state.mod_value){
					this.state.mod_value = parseFloat(this.state.display_value)
				}
				let total = calculate(parseFloat(this.state.mod_value), parseFloat(this.state.stored_value), this.state.button_val)
				console.log(`answer is : ${total}`)
				this.setState({
					display_value: total,
					stored_value: total
				})	
				console.log({stored_value: this.state.stored_value, mod_value: this.state.mod_value, display: this.state.display_value})
			}
			else if(event.target.value == "\u00B1"){
				console.log("plus minus button pushed")
				console.log(this.state.stored_value)
				let oppposite
				if (this.state.display_value == 0){
					oppposite = (parseFloat(this.state.stored_value)> 0 ? -Math.abs(this.state.stored_value) : Math.abs(this.state.stored_value))

				}
				else {
					oppposite = (parseFloat(this.state.display_value)> 0 ? -Math.abs(this.state.display_value) : Math.abs(this.state.display_value))
				}
				console.log({oppposite: oppposite})
				this.setState({
					display_value: oppposite
				})
			}
			//This set a dot.
			else if (event.target.value == "\u002E"){
				if(this.state.display_value.includes(".")){
					return null
				}
				this.setState({
					display_value: this.state.display_value + "."
				})
			}
			else {
				this.setState({
					stored_value: parseFloat(this.state.display_value),
					display_value: 0,
					button_val: event.target.value
				})
			}
		}
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