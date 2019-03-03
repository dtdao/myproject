import React, { Component } from 'react'
import './app.css';

export default class Contact extends React.Component {
	constructor(props){
		super(props);

	}

	render(){
		return(
				<div>
					<div className="container">
						<div className="contact-area text-center">
							<a className="icon-link" href="https://codepen.io/runonthesun/" target-="_blank"><i className="fab fa-codepen fa-2x"></i></a>
							<a className="icon-link" href="https://github.com/kwality/" target="_blank"><i className="fab fa-github fa-2x"></i></a>
							<a className="icon-link" href="https://www.instagram.com/dongoutthere/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a> 
							<a className="icon-link" href="https://www.facebook.com/dongoutthere/" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
						</div>
					</div> 
				</div>
			)
	}
}
