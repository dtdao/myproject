import React, {Component} from 'react';
import WorkoutForm from './workout_form.js';
import WorkoutDisplay from './workout_display.js';
import "./workout_app.css"

export default class WorkoutTracker extends Component {
	constructor(props){
		super(props)
		this.state = { data: "test" }
		this.loadData = this.loadData.bind(this)
	}

	loadData() {
		console.log("Loading Data");
		fetch("/api/exercise/")
			.then(res => {
				return res.json()
			})
			.then(data => {
				this.setState({data})
			})
			.catch(err => console.log(err))
	}

	componentDidMount(){
		console.log("component did mount")
		this.loadData()
	}

	componentDidUpdate(prevState){
		// this.loadData()
	}


	render(){
		const {data} = this.state
		return(
			<div className="container">
				<div className="row justify-content-md-center">
					<WorkoutForm />
				</div>
				<div className="row justify-content-sm-center">
					<WorkoutDisplay data={data}/>
				</div>
			</div>
		)
	}
}