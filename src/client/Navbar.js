import React, { Component } from 'react';
import './app.css';
import {NavLink, Link} from 'react-router-dom'

export default class NavigationBar extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<nav className="navbar navbar-expand-lg navbar-light">
				<a className="navbar-brand"><img src="../public/assets/Dong D Black.png" width="40" height="40"/></a>
				<button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarcontent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarcontent">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item"><NavLink to="/"><span className="link-text">HOME</span></NavLink></li>
						<li className="nav-item dropdown">
							<Link to="#" role="button" id="navbardropdown" data-toggle="dropdown">
							<span className="link-text">PROJECTS</span>
							</Link>
							<div className="dropdown-menu">
								<Link to="/calculator" className="dropdown-item"><span className="link-text">CALCULATOR</span></Link>
								<Link to="/workout" className="dropdown-item"><span className="link-text">WORKOUT TRACKER</span></Link>
								<Link to="/mtg" className="dropdown-item"><span className="link-text">MTG COLLECTION</span></Link>
								<Link to="#" className="dropdown-item"><span className="link-text">PLACEHOLDER</span></Link>
								<Link to="#" className="dropdown-item"><span className="link-text">PLACEHOLDER</span></Link>
								<Link to="#" className="dropdown-item"><span className="link-text">PLACEHOLDER</span></Link>
							</div>
						</li>
						<li className="nav-item"><NavLink to="/about"><span className="link-text">ABOUT</span></NavLink></li>
						<li className="nav-item"><NavLink to='/contact'><span className="link-text">CONTACT</span></NavLink></li>
					</ul>
				</div>
			</nav>
			);
	}

}
