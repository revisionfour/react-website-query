import React from 'react'

class WhoIsEntry extends React.Component {
	render(){
		let rowLength = this.props.data.value.length;

		let rowHeight = Math.ceil(rowLength/100);

		console.log('Rendering WhoIsEntry');

		return (

			<div className="whois-row">
				<div>{this.props.data.attribute}:</div>
				<div>{this.props.data.value}</div>
			</div>
		)
	}
}

export default WhoIsEntry