import React from 'react'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import WhoIsEntry from './WhoIsEntry'

// This will be a table of WhoIsComponents

export default class WhoIsTable extends React.Component {
	render(){

		// var transitionType
		console.log('Rendering WhoIsTable');

		return (
			<div id="whois-table">
				<ReactCSSTransitionGroup transitionName="whois-animation" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				{this.props.entries.map(function(obj){
					return <WhoIsEntry key={obj.key} data={obj} />
				})}
				</ReactCSSTransitionGroup>
			</div>
			
		);
	}
}