import React, {Component} from 'react'

export default class Article extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.data.title,
      description :this.props.data.description,
      urlToImage: this.props.data.urlToImage,
      url: this.props.data.url,
      publishedAt: this.props.data.publishedAt
    }

    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(event){
    event.preventDefault()
    fetch("/api/news/add", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(this.state)
    }).then(() => {
      console.log("Added " + this.state.title + " to database.")
    }).catch( (err) => {
      console.log(err)
    })
  }


  render(){
    let {title, description, urlToImage, url} = this.state
    return(
      <div className="container">
        <div className="media border bg-light p-3">
          <a href={url} target="_blank">
            <img id="articleImg" className="align-self-start mr-3" src={urlToImage} alt="..." width="450" height="200"/>
          </a>
          <div className="media-body">
            <a className="h5 mt-0" href={url} target="_blank">{title}</a>
            <p>{description}</p>
          </div>
          <a href="..." onClick={this.handleAdd}><i className="fas fa-plus-circle m-1 fa-lg"></i></a>
        </div>
      </div>
    )
  }
}
