import React, {Component} from "react";
import Card from './mtg_card.js';
import "./mtg_app.css"

const GenerateCardList = (prop) => {
	let cardResult = []
	for (let i = 0; i < prop.card.length; i++){
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
		this.state = {
			searchterm: this.props.searchterm,
			list: []
		}
		// this.collectionChecker = this.collectionChecker.bind(this)
	}

	// collectionChecker(id){
	// 	let newList=[]
	// 	for (let i = 0; i < this.state.list; i++){
	// 		if(this.state.list[i].id != id){
	// 			newList.push(this.state.list[i])
	// 		}
	// 	}
	// 	this.setState({
	// 		list: newList
	// 	})
	// }

	componentWillReceiveProps(nextprops){
		this.setState({
			list: nextprops.result
		})
	}

	render(){
		let {list} = this.state
		return(
			<div className="row justify-content-md-center">
				<GenerateCardList card={list}  collection={this.props.mycollection} />
			</div>
		)
	}
}