import React, { Component } from 'react';

const formatDate = (date) =>{
	let newDate = new Date(date)
	const monthName = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let d = newDate.getDate()
	let m = monthName[newDate.getMonth()]
	let y = newDate.getFullYear()
	return d + " " + m + " " + y;
}

const GenerateData = (props) =>{
	return(
		<tr>
			<th scrope="row">{formatDate(props.data.date)}</th>
			<td>{props.data.exercise}</td>
			<td>{props.data.weight}</td>
			<td>{props.data.sets}</td>
			<td>{props.data.reps}</td>
		</tr>
	)
}

const GenerateRow = (props) => {
	let data = [];
	for(let i = 0; i < props.data.length; i++){
		data.push(
				<GenerateData key={i} data={props.data[i]}/>
			)
	}
	return data
}

export default class WorkoutDisplay extends Component {
	constructor(props){
		super(props)
	}

	render(){
		let data = this.props.data
		return(
			<div className="container">
				<h1 className="text-center">History</h1>
				<table className="table">
					<thead>
						<tr>
							<th scope="Date">Date</th>
							<th scope="Exercise">Exercise</th>
							<th scope="Weight">Weight</th>
							<th scope="Set">Sets</th>
							<th scope="Reps">Reps</th>
						</tr>
					</thead>
					<tbody>
						<GenerateRow data={this.props.data}/>
					</tbody>
				</table>
			</div>
		)
	}
}
