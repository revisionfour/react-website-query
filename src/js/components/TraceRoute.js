import React from 'react';

import { connect } from 'react-redux';

import TraceRouteMap from './TraceRouteMap';
import TraceRouteList from '../containers/TraceRouteList';

class TraceRoute extends React.Component{
	render(){
		return (
			<div>
				<h1 className="text-center">Trace Route</h1>
				<TraceRouteMap markers={this.props.markers} />
				<TraceRouteList markers={this.props.markers} />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		markers: state.TraceRoute.traceRoute
	}
}

// export default TraceRoute;

export default connect(mapStateToProps)(TraceRoute);