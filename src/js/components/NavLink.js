import React from 'react';

import { Link } from 'react-router';

class NavLink extends React.Component{

	getActive(){
		var path = window.location.pathname;

		return path == this.props.to ? 'active' : '';
	}

	render(){
		var currentClass = this.getActive();

		return (
			<li className={currentClass} role="navigation"><Link to={this.props.to}>{this.props.name}</Link></li>
		);
	}
}

export default NavLink;