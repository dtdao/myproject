import React, {Component} from "react";
import {css} from '@emotion/core'
import {ClipLoader} from 'react-spinners'

const override = css`
	display: block;
	margin: 0 auto;
	border-color: black;
`

export default class Card extends Component {
	constructor(props){
		super(props)
		this.state = {
			loaded: false
		}

		this.onLoaded = this.onLoaded.bind(this)
		// this.imgFailed = this.imgFailed.bind(this)
		this.clickHandler = this.clickHandler.bind(this)
	}

	onLoaded(){
		this.setState({
			loaded: true
		})
	}
	// 
	// 
	clickHandler(e){
		// Open side bar
	}
	render(){
		// console.log(this.props)
		return(
			<div className="list-group-item list-group-action">
				<div className="d-flex p-2">
					<div className="align-self-start">
						<ClipLoader css={override} sizeUnit={'px'} size={100} color={'000000'} loading={!this.state.loaded} />
						<img className="mtg-card img-fluid" src={this.props.data.imageUrl} alt={this.props.data.name} key={this.props.data.id} onLoad={this.onLoaded} onClick={this.clickHandler} />
					</div>
					<div className="align-self-stretch ml-3">
						<div className="d-flex w-100 justify-content-between">
							<h3 className="mb-1">{this.props.data.name}</h3>
							<small>{this.props.data.cmc}</small>
						</div>
						<p>{this.props.data.text}</p>
					</div>
				</div>
			</div>
		)
	}
}