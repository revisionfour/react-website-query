import React from 'react'
import { connect } from 'react-redux'

class TraceRouteList extends React.Component{
	renderList(marker, index){

		var location = `${marker.city}, ${marker.region} ${marker.country}`;

		// Don't start at 1
		index++;

		return (
			<tr key={index}>
				<td className="col-md-1">{index}</td>
				<td className="col-md-4">{marker.ip}</td>
				<td className="col-md-7">{location}</td>
			</tr>
		);
	}

	render(){

		console.log('Rendering TraceRouteList');

		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th className="col-md-1">#</th>
						<th className="col-md-4">IP</th>
						<th className="col-md-7">Location</th>
					</tr>
				</thead>
				<tbody>
				{this.props.markers.map(this.renderList)}
				</tbody>
			</table>
		);
	}
}

export default TraceRouteList;