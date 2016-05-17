import React from 'react';

import NavLink from './NavLink'

import { connect } from 'react-redux';

class Nav extends React.Component{
	constructor(){
		super();

		this.changePath = this.changePath.bind(this);
	}

	changePath(){
		console.log('Force a rerender');

		this.forceUpdate();
	}


	render(){
		var whoisIcon = this.props.whoIsLoading ? 'loading' : 'glyphicon-user' ;
		var tracerouteIcon = this.props.traceRouteLoading ? 'loading' : 'glyphicon-map-marker' ;

		var pingIcon = 'glyphicon-hourglass';

		console.log('Rendering Nav');

		return (
			<nav>
				<ul className="nav nav-tabs">
					<NavLink changePath={this.changePath} to="/" icon={whoisIcon} name="WhoIs Lookup" />
					<NavLink changePath={this.changePath} to="/traceroute" icon={tracerouteIcon} name="TraceRoute" />
					<NavLink changePath={this.changePath} to="/ping" icon={pingIcon} name="Ping" />
				</ul>
			</nav>
		);
	}
}

function mapStateToProps(state){
	return {
		whoIsLoading: state.WhoIs.loading,
		traceRouteLoading: state.TraceRoute.loading
	}
}

export default connect(mapStateToProps)(Nav);

