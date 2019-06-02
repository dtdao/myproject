import React, {Component} from "react";
import "./news_app.css"

//react-infinite-scroller
export default class NewsSearch extends Component {
	constructor(props){
		super(props)
		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch(event){
		event.preventDefault()
		console.log("a Search is being done")

	}



	render(){
		return(
			<div className="container-fluid">
				<div className="jumbotron bg-cover" onSubmit={this.handleSearch}>
					<div className="container banner h-100">
						<p className="display-4 text-center h1" id="text-banner">Forestation</p>
					</div>
					<form>
						<div className="d-flex justify-content-center h-150 mt-3">
							<div className="searchBar">
								<input className="searchinput" type="text" name="" placeholder="Search..."></input>
								<button className="btn btn-default" type="submit" id="searchbutton"><i className="fas fa-search"></i></button>
							</div>
						</div>
					</form>
				</div>

			</div>
		)
	}

}
