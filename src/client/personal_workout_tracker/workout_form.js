import React, { Component } from 'react'
import "./workout_app.css";

export default class WorkoutForm extends Component {
	constructor(props){
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event){
		event.preventDefault();
		const data = new FormData(event.target);
		console.log(data)
	}

	render(){
		return(
			<div className="container">
				<h1 className="text-center">Exercise Tracker</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="form-row">
							<div className="form-group col-md-2">
								<label htmlFor="inputDate">Date</label>
								<input type="date" className="form-control" id="inputDate" ref="inputDate" />
							</div>
							<div className="form-group col-md-5">
								<label htmlFor="inputExerciseName">Exercise Name</label>
								<input type="text" className="form-control" id="inputExerciseName" placeholder="Exercise Name"/>
							</div>
							<div className="form-group col-md-1">
								<label htmlFor="inputTime">Time</label>
								<input type="number" min="1" className="form-control" id="inputTime"/>
							</div>
							<div className="form-group col-md-1">
								<label htmlFor="inputSets">Sets</label>
								<input type="number" min="1" className="form-control" id="inputSets"/>
							</div>
							<div className="form-group col-md-1">
								<label htmlFor="inputReps">Reps</label>
								<input type="number" min="1" className="form-control" id="inputReps"/>
							</div>
						<button type="submit" className="border border-primary btn btn-primary mb-2">Add</button>
						</div>
					</form>
			</div>

		)
	}

}