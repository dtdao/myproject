import React, {Component} from "react";
import {css} from '@emotion/core'
import {ClipLoader} from 'react-spinners'
const mtg = require("mtgsdk");

const override = css`
	display: block;
	margin: 0 auto;
	border-color: black;
`

export default class Card extends Component {
	constructor(props){
		super(props)
		this.state = {
			loaded: false,
			collectionSearch: ""
		}

		this.onLoaded = this.onLoaded.bind(this)
		this.addCard = this.addCard.bind(this)
		this.removeCard = this.removeCard.bind(this)
	}

	onLoaded(){
		this.setState({
			loaded: true,
			collectionSearch: this.props.info
		})
	}
	// 
	//
	addCard(event){
		event.preventDefault()
		if(this.state.collectionSearch){
			fetch("/api/mtg/"+ event.target.value, {
				method: "put",
				headers: {"Content-type": "application/json"}
			})
			.then(res => {
				console.log("Added anther card to collection")
			})
			.catch(err => {
				console.log(err)
			})
		}
		else{ 
			mtg.card.where({
				id: event.target.value
			}).then(result => {
				let card ={
					name: result[0].name,
					count: 1,
					imgurl: result[0].imageUrl,
					id: result[0].id
				}
				fetch("/api/mtg/add", {
					method: "post",
					headers: {"Content-Type": "application/json"},
					body: JSON.stringify(card)
				}).then(() => {
					console.log("Added: " + result[0].name + " to collection")
				}).catch(err=>{
					console.log(err)
				})
			})
		}
	}

	removeCard(event){
		//passing What card that I want to delete through the parametter
		//Probably send the info using the body
		event.preventDefault()
		fetch("/api/mtg/"+ event.target.value, {
			method: "delete"
		}).then( ()=>{
			console.log(console.log("Deleted a card from collection" ))
		}).catch( err => {
			console.log(err)
		})
	}

	render(){
		return(
			<div className="container card-container p-2">
				<ClipLoader className="justify-content-md-center" css={override} sizeUnit={'px'} size={100} color={'000000'} loading={!this.state.loaded} />
				<img className="mtg-card img-fluid" src={this.props.data.imageUrl} alt={this.props.data.name} key={this.props.data.id} onLoad={this.onLoaded}/>
				<div className="card-data-middle">
					{this.props.info ? 

					<div className="info">
						<h6>Total in collection : {this.props.data.count} </h6>
						<button className="m-2" type="submit" onClick={this.removeCard}>Remove</button>
						<button className="m-2" type="submit" onClick={this.addCard} value={this.props.data.id}>Add Card</button>
 					</div> :

					<div className="info">
						<button type="submit" onClick={this.addCard} value={this.props.data.id}>Add Card</button>
					</div>
					}
				</div>
			</div>
		)
	}
}