import React, {Component} from 'react';
import WorkoutForm from './workout_form.js';
import WorkoutDisplay from './workout_display.js';
import "./workout_app.css"

export default class WorkoutTracker extends Component {
	constructor(props){
		super(props)
		this.state = { data: "", reload: false}
		this.loadData = this.loadData.bind(this)
	}

	loadData() {
		console.log("Loading Data");
		fetch("/api/exercise/")
			.then(res => {
				return res.json()
			})
			.then(data => {
				this.setState({data: data})
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
			this.setState({reload: false})
		}
	}


	render(){
		// This is something interesting shit in workoutform.  parent rerender form child by using a callback.
		const {data} = this.state
		return(
			<div className="container">
				<div className="row justify-content-md-center">
					<WorkoutForm update={bool =>{this.setState({reload: bool})}}/>
				</div>
				<div className="row justify-content-sm-center">
					<WorkoutDisplay data={data}/>
				</div>
			</div>
		)
	}
}