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

	clickHandler(e){
		console.log(e.target)

	}
	render(){
		// console.log(this.props)
		return(
			<div>
				<ClipLoader css={override} sizeUnit={'px'} size={100} color={'000000'} loading={!this.state.loaded} />
				<img src={this.props.data.imageUrl} alt={this.props.data.name} key={this.props.data.id} onLoad={this.onLoaded} onClick={this.clickHandler} />

			</div>
		)
	}
}