import React, {Component} from 'react'



export default class Article extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="container">
        <div className="media border bg-light p-3">
          <a href={this.props.data.url} target="_blank">
            <img id="articleImg" className="align-self-start mr-3" src={this.props.data.urlToImage} alt="..." width="450" height="200"/>
          </a>
          <div className="media-body">
            <a className="h5 mt-0" href={this.props.data.url} target="_blank">{this.props.data.title}</a>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
