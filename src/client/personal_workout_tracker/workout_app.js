import React, {Component} from 'react';
import WorkoutForm from './workout_form.js';
import WorkoutDisplay from './workout_display.js';
import "./workout_app.css"

export default class WorkoutTracker extends Component {
	constructor(props){
		super(props)
		this.state = { data: null }
	}

	loadData() {
		console.log("Loading Data");
		fetch("/api/exercise/")
			.then(response => {
				response.json()
			})
			.then(data => {
				// console.log(data)
				this.setState({data})
			})
			.catch(err => console.log(err))
	}

	componentDidMount(){
		console.log("component did mount")
		this.loadData()
	}

	componentDidUpdate(prevState){
		console.log(this.state.data)
	}


	render(){
		return(
			<div className="container">
				<div className="row justify-content-md-center">
					<WorkoutForm />
				</div>
				<div className="row justify-content-sm-center">
					<WorkoutDisplay value={this.state.data}/>
				</div>
			</div>
		)
	}
}