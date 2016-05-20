import React from 'react'

import { connect } from 'react-redux'

class Ping extends React.Component{

	render(){
		return (
			<div>
				<h1 className="text-center">Ping</h1>
				<ul class="list-group">
				{this.props.pingData.map(function(ping, index){
					return (
						<li key={'ping'+index} class="list-group-item">{ping}</li>
					);
				})}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		pingData: state.Ping.pingData
	}
}

export default connect(mapStateToProps)(Ping);