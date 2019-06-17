import React, {Component} from 'react'

export default class Article extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.data.title,
      description :this.props.data.description,
      urlToImage: this.props.data.urlToImage,
      url: this.props.data.url,
      publishedAt: this.props.data.publishedAt,
      id: this.props.data._id
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

  handleRemove(event){
    event.preventDefault()
    fetch("/api/news/myarticles/remove/" + this.state.id, {
      method: "put",
      headers: {"Content-Type": "application/json"}
    }).then( (res)=> {
      console.log("removed " + this.state.title + "from database")
      return res.json()
    }).catch(err=>{
      if(err){
        console.log(err)
      }
    })
    this.props.reload()
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
            <p className="media-description">{description}</p>
          </div>
          <ul className="list-group list-group-horizontal-sm">
            <a href="..."  onClick={this.handleAdd}><i className="fas fa-plus-circle m-1 fa-lg"></i></a>
            {this.props.show_remove_button ? <a href="..."  onClick={this.handleRemove}><i className="fas fa-minus-circle m-1 fa-lg"></i></a> : null}
          </ul>
        </div>
      </div>
    )
  }
}
