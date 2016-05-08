import React from 'react'
import { connect } from 'react-redux'

import WhoIsEntry from '../components/WhoIsEntry'

class WhoIsList extends React.Component {
	render(){

		if(this.props.entries === undefined){
			return null;
		}

		console.log('Rendering WhoIsTable');

		return (
			<div id="whois-table">
				{this.props.entries.map(function(obj){
					return <WhoIsEntry key={obj.key} data={obj} />
				})}
			</div>
			
		);
	}
}

function mapStateToProps(state){
	return {
		entries: state.main.whoIsData
	}
}

export default connect(mapStateToProps)(WhoIsList);