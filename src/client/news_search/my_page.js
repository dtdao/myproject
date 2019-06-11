import React, { Component } from 'react';
import Article from './news_article.js'

export default class MyPage extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="container-fluid">
        <h1>Place holder for personal page.</h1>
        <h2>This is where you can see your stored articles to read later on.</h2>
      </div>
    )
  }
}
