import React, { Component } from 'react'
import "./workout_app.css";

export default class WorkoutForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			date: '',
			exercise: '',
			weight: 1,
			sets: 1,
			reps: 1
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmit(event){
		event.preventDefault();
		fetch("/api/exercise/new", {
			method: "post",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(this.state)
		})
	}

	render(){
		return(
			<div className="container">
				<h1 className="text-center">Exercise Tracker</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="form-row">
							<div className="form-group col-sm-2">
								<label htmlFor="inputDate">Date</label>
								<input type="date" className="form-control" id="inputDate" ref="inputDate" name="date"onChange={this.handleChange} required/>
							</div>
							<div className="form-group col-sm-4">
								<label htmlFor="inputExerciseName">Exercise</label>
								<input type="text" className="form-control" id="inputExerciseName" placeholder="Exercise Name" name="exercise" onChange={this.handleChange} required/>
							</div>
							<div className="form-group col-sm-2">
								<label htmlFor="inputWeight">Weight (kg) </label>
								<input type="number" min="1" className="form-control" id="inputWeight" name="weight" onChange={this.handleChange} required/>
							</div>
							<div className="form-group col-sm-1">
								<label htmlFor="inputSets">Sets</label>
								<input type="number" min="1" className="form-control" id="inputSets" name="sets" onChange={this.handleChange} required/>
							</div>
							<div className="form-group col-sm-1">
								<label htmlFor="inputReps">Reps</label>
								<input type="number" min="1" className="form-control" id="inputReps" name="reps" onChange={this.handleChange} required/>
							</div>
						<button type="submit" id="exerciseSubmitBtn" className="btn btn-primary mb-2">Add</button>
						</div>
					</form>
			</div>

		)
	}

}