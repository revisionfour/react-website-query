import React from 'react';

import { Link } from 'react-router';

class NavLink extends React.Component{

	constructor(){
		super();

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e){
		this.props.changePath();
	}

	render(){
		var currentClass = window.location.pathname == this.props.to ? 'active' : '';
		var iconClass = `glyphicon ${this.props.icon}`;

		return (
			<li onClick={this.handleClick} className={currentClass} role="navigation">
				<Link to={this.props.to}>
					<span className={iconClass} aria-hidden="true"></span>
					{this.props.name}
				</Link>
			</li>
		);
	}
}

export default NavLink;