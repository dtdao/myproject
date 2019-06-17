import React, {Component} from 'react';
import WorkoutForm from './workout_form.js';
import WorkoutDisplay from './workout_display.js';
import "./workout_app.css"
import {css} from '@emotion/core'
import {ClipLoader} from 'react-spinners'

const override = css`
	display: block;
	margin: 0 auto;
	border-color: black;
`

export default class WorkoutTracker extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: "",
			reload: false,
			fetch: true
		}
		this.loadData = this.loadData.bind(this)
	}

	loadData() {
		console.log("Loading Data");
		fetch("/api/exercise/")
			.then(res => {
				return res.json()
			})
			.then(data => {
				this.setState({data: data, fetch: false})
			})
			.catch(err => console.log(err))
	}

	componentDidMount(){
		console.log("component did mount")
		this.loadData()
	}

	componentDidUpdate(prevState){
		if(this.state.reload == true){
			this.loadData()
			this.setState({reload: false, fetch: false})
		}
	}


	render(){
		let me = "hello"
		const {data} = this.state
		return(
			<div className="container">
				<div className="row justify-content-md-center">
					<WorkoutForm update={bool =>{this.setState({reload: bool, fetch: bool})}}/>
				</div>
				<div className="row justify-content-sm-center">
					<WorkoutDisplay data={data}/>
					<ClipLoader css={override} sizeUnit={'px'} size={100} color={'000000'} loading={this.state.fetch ? this.state.fetch : this.state.reload} />
				</div>
			</div>
		)
	}
}
