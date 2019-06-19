import React, {Component} from "react";
import "./news_app.css"
import Article from "./news_article.js"
import MyArticle from "./my_page.js"
const NewsAPi = require("newsapi")
import {ClipLoader} from 'react-spinners';
import {css} from '@emotion/core';
import InfiniteScroll from "react-infinite-scroller";
//API for NewsApi goes here.
const newsapi = new NewsAPi(``)
//react-infinite-scroller

const override = css`
	display: block;
	margin: 0 auto;
	border-color: black;
`

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
			loading: false,
			page: 1
		}
		this.handleSearch = this.handleSearch.bind(this);
		this.searchChange = this.searchChange.bind(this);
		this.toggleMyPage = this.toggleMyPage.bind(this);
		this.moreItems = this.moreItems.bind(this);

	}

	handleSearch(event){
		event.preventDefault()
		this.setState({
			loading: true,
		})
		if(this.state.data){
			this.setState({
				data: []
			})
		}
		newsapi.v2.everything({
			q: this.state.searchvalue,
			pageSize: 10,
			page: this.state.page
		}).then(res => {
			this.setState({
				data: res,
				loading: false,
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
			data: [],
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

	moreItems(page){
		newsapi.v2.everything({
			q: this.state.searchValue,
			pageSize: 10,
			page: page
		}).then(res => {
			let articles = this.state.myArticles;
			res.forEach( article => {
				articles.push(article)
			})
			this.setState({
				myArticles: articles,
				page: this.state.page++
			})
		})
	}

	render(){
		//Make thetree icon load more articles.
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
				  <button className={"btn m-1" + (this.state.myarticles ? " btn-primary" : " btn-danger")} onClick={this.toggleMyPage}>{this.state.myarticles ? <span>Go Explore</span> : <span>My Forest</span>}</button>
				</div>
				{this.state.data.articles && this.state.myarticles == false ? <GenerateArticles data={this.state.data}/ > : <div className="text-center"><ClipLoader css={override} sizeUnit={'px'} size={100} color={'000000'} loading={this.state.loading} /></div>}
				{this.state.myarticles ? <MyArticle /> : null}
				<div className="text-center m-3 "><i className="fas fa-tree fa-3x"></i></div>
			</div>
		)
	}

}
