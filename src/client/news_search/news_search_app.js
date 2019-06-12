import React, {Component} from "react";
import "./news_app.css"
import Article from "./news_article.js"
import MyArticle from "./my_page.js"
const NewsAPi = require("newsapi")
//API for NewsApi goes here.
const newsapi = new NewsAPi(``)
//react-infinite-scroller

const GenerateArticles = (prop) =>{
	let Articles = []
	for (let i = 0; i < prop.data.articles.length; i++){
		Articles.push(
			<div key={i}>
				<Article data={prop.data.articles[i]} />
			</div>
		)
	}
	return Articles
}

export default class NewsSearch extends Component {
	constructor(props){
		super(props)
		this.state = {
			searchvalue: '',
			data: [],
			myarticles: false,
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.searchChange = this.searchChange.bind(this);
		this.toggleMyPage = this.toggleMyPage.bind(this);

	}

	handleSearch(event){
		event.preventDefault()
		if(this.state.data){
			this.setState({
				data: []
			})
		}
		newsapi.v2.everything({
			q: this.state.searchvalue,
		}).then(res => {
			this.setState({
				data: res
			})
		}).catch(err =>{
			if(err){
				console.log(err)
			}
		})
	}

	toggleMyPage(e){
		e.preventDefault()
		this.setState({
			myarticles: !this.state.myarticles
		})
	}

	shouldComponentUpdate(nextState){
		if(nextState.data != this.state.data){
			return true
		}
		return false
	}

	searchChange(event){
		this.setState({
			searchvalue: event.target.value
		})
	}

	render(){
		return(
			<div className="container-fluid">
				<div className="jumbotron bg-cover">
					<div className="container banner h-100">
						<p className="display-4 text-center h1" id="text-banner">F o r e s t a t i o n</p>
						<p className="display-5 text-center h5" id="sub-banner">News through the trees</p>
					</div>
					<form onSubmit={this.handleSearch}>
						<div className="d-flex justify-content-center h-150 mt-3">
							<div className="searchBar">
								<input className="searchinput" type="text" name="" placeholder="Search..." onChange={this.searchChange}></input>
								<button className="btn btn-default" type="submit" id="searchbutton"><i className="fas fa-tree"></i></button>
							</div>
						</div>
					</form>
				  <button className="btn btn-default m-1" onClick={this.toggleMyPage}>My page</button>
				</div>
				{this.state.data.articles && this.state.myarticles == false ? <GenerateArticles data={this.state.data}/> : <div className="text-center"><h1>/</h1><i className="fas fa-tree fa-3x"></i><h1>/</h1></div>}
				{this.state.myarticles ? <MyArticle /> : <div></div>}
			</div>
		)
	}

}
