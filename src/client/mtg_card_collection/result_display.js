import React, {Component} from "react";
import Card from './mtg_card.js';
import "./mtg_app.css"

const GenerateCardList = (prop) => {
	let cardResult = []
	console.log(prop.card.length)
	for (let i = 0; i < prop.card.length; i++){
		//IMAGE NOT SHOWING UO BECAUSE VARIABLE NAME IS DIFFERENT imageurl and not imageUrl
		//FIX TOMORROW
		if(prop.card[i].imageUrl){
			cardResult.push(
				<div className="col-6 col-lg-3 col-md-4 col-sm-6" key={i}>
					<Card data={prop.card[i]} info={prop.collection}/>
				</div>
				)
		}
	}
	return cardResult
}

//

export default class CardResult extends Component{
	constructor(props){
		super(props)
	}

	render(){
		console.log(this.props.result)
		return(
			<div className="row justify-content-md-center">
				<GenerateCardList card={this.props.result}  collection={this.props.mycollection}/>
			</div>
		)
	}
}