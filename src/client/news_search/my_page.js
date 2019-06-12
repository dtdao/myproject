import React, { Component } from 'react';
import Article from './news_article.js';


const GenerateArticles = (prop) => {
  let Articles = []
  for(let i = 0; i < prop.data.length; i++){
    Articles.push(
      <div key={i}>
        <Article data={prop.data[i]} />
      </div>
    )
  }

  return Articles
}

export default class MyPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      myArticles: []
    }
  }

  componentDidMount(){
    fetch("/api/news/myarticles", {
      method: "get",
    }).then( (res) => {
      return res.json()
    }).then( data => {
      this.setState({
        myArticles: data
      })
      console.log("componnent did mount")
    }).catch(err => {
      if(err){
        console.log(err)
      }
    })
  }
  render(){
    console.log(this.state.myArticles[0])
    if(this.state.myArticles.length == 0){
      return <h1>Loading..</h1>
    }
    return(
      <div className="container-fluid">
        <GenerateArticles data={this.state.myArticles} />
        <h2>This is where you can see your stored articles to read later on.</h2>
      </div>
    )
  }
}
