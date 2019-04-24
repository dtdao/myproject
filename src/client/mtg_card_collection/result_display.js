import React, {Component} from "react";

const GenerateCard = (prop) => {
	let cardResult = []
	console.log(prop.card.length)
	for (let i = 0; i < prop.card.length; i++){
		if(prop.card[i].imageUrl){
			cardResult.push(
					// <li key={prop.card[i].id}>{prop.card[i].name}</li>
					<img src={prop.card[i].imageUrl} alt={prop.card[i].name} key={prop.card[i].id}/>
				)
		}
	}
	return cardResult
}

export default class CardResult extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div className="row justify-content-md-center">
				<ul className="row justify-content-md-center">
					<GenerateCard card={this.props.result} />					
				</ul>
			</div>

		)
	}
}