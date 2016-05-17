import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TraceRouteMap from './TraceRouteMap';
import TraceRouteList from '../containers/TraceRouteList';

import { changeTraceRoute } from '../actions/index';

class TraceRoute extends React.Component{

	constructor(){
		super();
		this.state = {
			hops: []
		}
	}
/*
	componentWillMount(){

		var self = this;

		socket.on('traceroute', function(hop){
			var newArray = self.state.hops.slice();
			newArray.push(hop);
			self.setState({hops:newArray});
			console.log('------------------');
			console.log(hop);

			// self.props.changeTraceRoute(newArray);
		});

		socket.on('traceroutedone', function(){
			console.log('traceroutedone');
			self.props.changeTraceRoute(self.state.hops);
			self.setState({hops:[]});
		});

	}
	*/

	render(){
		return (
			<div>
				<h1 className="text-center">Trace Route</h1>
				<TraceRouteMap markers={this.state.hops} />
				<TraceRouteList markers={this.state.hops} />
			</div>
		);
	}
}

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

export default connect(mapStateToProps,mapDispatchToProps)(TraceRoute);
*/



