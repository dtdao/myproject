import React, {Component} from 'react'

// Used the mtg sdk to consume the api

export default class MTG extends Component {
	constructor(props){
		super(props)
		this.state = {
			collectionSearch: false,
			searchValue: 'test'
		}
		this.selectChange = this.selectChange.bind(this);
		this.onSearch = this.onSearch.bind(this);
		this.searchChange = this.searchChange.bind(this);
	}

	onSearch(event){
		event.preventDefault()
		
	}

	searchChange(event){
		this.setState({
			searchValue: event.target.value
		})
	}

	selectChange(event){
		if(event.target.value == "mycollection"){
			this.setState({
				collectionSearch: true
			})
		}
		else {
			this.setState({
				collectionSearch: false
			})
		}
	}
	render(){
		return (
			<div className="container">
				<div className="row justify-content-md-center" >
					<h1>My Card collection</h1>
				</div>

				<div className="row justify-content-md-center">
					<form className="col-sm-10" onSubmit={this.onSearch}>
						<div className="input-group mb-3">
							<div className="input-group-prepend">	
								<select className="custom-select" id="inputgroupselect" onChange={this.selectChange}>
									<option defaultValue="allcards">ALL CARDS</option>
									<option value="mycollection">MY CARDS</option>
								</select>
							</div>
							<input type="text" className="form-control" placeholder="search" aria-label="Search for your card here" onChange={this.searchChange} value={this.state.value}/>
							<div className="input-group-append">
								<button className="btn btn-outline-secondary" type="button" id="search-button" onClick={this.onSearch}>Search</button>
							</div>  
						</div>
					</form>
				</div>
			</div>
		)
	}
}