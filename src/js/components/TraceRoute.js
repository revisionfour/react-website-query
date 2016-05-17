import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TraceRouteMap from './TraceRouteMap';
import TraceRouteList from '../containers/TraceRouteList';

import { changeTraceRoute } from '../actions/index';

class TraceRoute extends React.Component{

	/*
	constructor(){
		super();
		this.state = {
			hops: [],
			isDone: false
		}
	}*/

	/*componentWillMount(){
		

	}*/

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

// render(){
// 		return (
// 			<div>
// 				<h1 className="text-center">Trace Route</h1>
// 				<TraceRouteMap markers={this.state.hops} />
// 				<TraceRouteList markers={this.state.hops} />
// 			</div>
// 		);
// 	}

	// render(){
	// 	return (
	// 		<div>
	// 			<h1 className="text-center">Trace Route</h1>
	// 			<TraceRouteMap markers={this.props.markers} />
	// 			<TraceRouteList markers={this.props.markers} />
	// 		</div>
	// 	);
	// }


function mapStateToProps(state){
	return {
		markers: state.TraceRoute.traceRoute
	}
}

export default connect(mapStateToProps)(TraceRoute);


/*
function mapDispatchToProps(dispatch){
	return bindActionCreators({changeTraceRoute}, dispatch);
}

export default connect(null,mapDispatchToProps)(TraceRoute);
*/



