import React, { Component } from 'react';
import Article from './news_article.js';


const GenerateArticles = (prop) => {
  let Articles = []
  for(let i = 0; i < prop.data.length; i++){
    Articles.push(
      <div key={i}>
        <Article data={prop.data[i]}  db_button={prop.db_article} remove_article={prop.remove}/>
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

    this.loadData = this.loadData.bind(this)
    this.removeArticle = this.removeArticle.bind(this)
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
    }).catch(err => {
      if(err){
        console.log(err)
      }
    })
  }

  removeArticle(item_id){
    fetch("/api/news/myarticles/remove/" + item_id, {
      method: "put",
      headers: {"Content-Type": "application/json"}
    }).then( (res)=> {
      console.log("removed article: " +item_id + " from database")
      return res.json()
    }).then( article => {
      console.log(article)
      if(article == null){
        this.setState({
          myArticles: this.state.myArticles
        })
      }
    }).catch(err=>{
      if(err){
        console.log(err)
      }
    })
    // let articles = this.state.myArticles;
    // for(let i = 0; i < articles.length; i++){
    //   if(articles[i]._id == item_id){
    //     articles.splice(i, 1)
    //   }
    // }
    //
    // this.setState({
    //   myArticles: articles
    // })

    // console.log(this.state.myArticles)
    this.loadData()
  }

  componentDidMount(){
    this.loadData()
  }


  render(){
    console.log(this.state.myArticles)
    if(this.state.myArticles.length == 0){
      return <h1 className="text-center">{`There are no trees here for you.  You can always search and add \n more!`}</h1>
    }
    return(
      <div className="container-fluid">
        <GenerateArticles data={this.state.myArticles} db_article={this.state.myArticle} remove={this.removeArticle}/>
      </div>
    )
  }
}
