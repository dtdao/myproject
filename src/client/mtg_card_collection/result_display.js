import React, {Component} from "react";
import Card from './mtg_card.js';

const GenerateCardList = (prop) => {
	let cardResult = []
	console.log(prop.card.length)
	for (let i = 0; i < prop.card.length; i++){
		if(prop.card[i].imageUrl){
			cardResult.push(
					<Card data={prop.card[i]} key={i}/>
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
					<GenerateCardList card={this.props.result} />					
				</ul>
			</div>

		)
	}
}