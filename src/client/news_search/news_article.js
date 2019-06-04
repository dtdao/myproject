import React, {Component} from 'react'



export default class Article extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    let bgstyle = {
      backgroundImage: 'url('+this.props.data.urlToImage+')',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
    return(
      <div className="container">
        <div className="media border bg-light p-3" style={bgstyle}>
          <div className="media-body">
            <h5 className="mt-0" src={this.props.data.url}>{this.props.data.title}</h5>
            <p>{this.props.data.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
