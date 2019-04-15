import React, { Component } from 'react';

const generateData = (props) =>{ 

}

export default class WorkoutDisplay extends Component {
	constructor(props){
		super(props)
	}

	render(){
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
						<tr>
							<th scope="row"> test date</th>
							<td>test exercise</td>
							<td>Test weight</td>
							<td>Test sets</td>
							<td>Test reps</td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}
