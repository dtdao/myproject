import React, { Component } from 'react';
import './app.css';
import {NavLink} from 'react-router-dom'

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
							<NavLink to="#" role="button" id="navbardropdown" data-toggle="dropdown">
							<span className="link-text">PROJECTS</span>
							</NavLink>
							<div className="dropdown-menu">
								<NavLink to="/app1" className="dropdown-item"><span className="link-text">CALCULATOR</span></NavLink>
								<NavLink to="#" className="dropdown-item"><span className="link-text">PLACEHOLDER</span></NavLink>
								<NavLink to="#" className="dropdown-item"><span className="link-text">PLACEHOLDER</span></NavLink>
								<NavLink to="#" className="dropdown-item"><span className="link-text">PLACEHOLDER</span></NavLink>
								<NavLink to="#" className="dropdown-item"><span className="link-text">PLACEHOLDER</span></NavLink>
								<NavLink to="#" className="dropdown-item"><span className="link-text">PLACEHOLDER</span></NavLink>
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
