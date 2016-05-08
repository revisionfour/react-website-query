import React from 'react'

class WhoIsEntry extends React.Component {
	render(){
		return (

			<div className="whois-row">
				<div>{this.props.data.attribute}:</div>
				<div>{this.props.data.value}</div>
			</div>
		)
	}
}

export default WhoIsEntry