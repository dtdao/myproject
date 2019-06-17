import React, { Component } from 'react';
import Article from './news_article.js';


const GenerateArticles = (prop) => {
  let Articles = []
  for(let i = 0; i < prop.data.length; i++){
    Articles.push(
      <div key={i}>
        <Article data={prop.data[i]}  show_remove_button={prop.db_article} reload={prop.reload}/>
      </div>
    )
  }
  return Articles
}

export default class MyPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      myArticles: [],
      myArticle: true
    }

    this.reload = this.reload.bind(this)
    this.loadData = this.loadData.bind(this)
  }

  reload(){
    this.loadData()
    console.log(this.state.myArticles)
  }

  loadData(){
    fetch("/api/news/myarticles", {
      method: "get",
    }).then( (res) => {
      return res.json()
    }).then( data => {
      this.setState({
        myArticles: data,
        reload: false
      })
      console.log("componnent did mount")
    }).catch(err => {
      if(err){
        console.log(err)
      }
    })
  }

  componentDidMount(){
    console.log("componnent did mount")
    this.loadData()
  }

  render(){
    if(this.state.myArticles.length == 0){
      return <h1>Loading..</h1>
    }
    return(
      <div className="container-fluid">
        <GenerateArticles data={this.state.myArticles} db_article={this.state.myArticle} reload={this.reload}/>
      </div>
    )
  }
}
