import React, { Component } from 'react'
import './app.css';

// const inlineStyle ={color: blue}
export default class Home extends React.Component{
	constructor(props){
		super(props)
	}

	render(){
		return(
			<div>
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-3" id="greeting">hi, im dong</h1>
						<hr className="my-4" />
				    	<h1>Sometimes i make things</h1>
						<h1>Sometimes they are good</h1>
						<h1>Let me make something for you?</h1>
					</div>
				</div>
			</div>
			)
	}

}