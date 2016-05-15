import React from 'react';

import NavLink from './NavLink'

class Nav extends React.Component{

	render(){
		return (
			<nav>
				<ul className="nav nav-tabs">
					<NavLink to="/" name="WhoIs Lookup" />
					<NavLink to="/traceroute" name="TraceRoute" />
				</ul>
			</nav>
		);
	}
}

export default Nav;
