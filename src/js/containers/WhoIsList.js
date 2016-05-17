import React from 'react'
import { connect } from 'react-redux'

class WhoIsList extends React.Component {

	renderList(data){
		return (
			<tr key={data.key}>
				<td className="col-md-1">{data.key}</td>
				<td className="col-md-3">{data.attribute}</td>
				<td className="col-md-8">{data.value}</td>
			</tr>
		);
	}

	render(){
		console.log('Rendering WhoIsTable');

		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th className="col-md-1">#</th>
						<th className="col-md-4">Attribute</th>
						<th className="col-md-7">Value</th>
					</tr>
				</thead>
				<tbody>
				{this.props.entries.map(this.renderList)}
				</tbody>
			</table>
			
		);
	}
}

function mapStateToProps(state){
	return {
		entries: state.WhoIs.whoIsData
	}
}

export default connect(mapStateToProps)(WhoIsList);