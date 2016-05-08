import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeWhoIsData, changeURL } from '../actions/index'

class SearchBar extends React.Component {
	constructor(){
		super();

		this.handleChange = this.handleChange.bind(this);
		// this.handleEnter = this.handleEnter.bind(this);
	}


	handleChange(e){
		let address = e.target.value;
		this.props.changeURL(address);
	}

	onFormSubmit(e){
		e.preventDefault();

		var self = this.props;

		var url = self.url;

		$.ajax({
			url: 'sendURL',
			method: 'POST',
			dataType: 'json',
			// dataType: 'text',
			data: {
				address: url
			},
			success: function(data){
				var i=0;

				data.forEach(function(obj){
					obj.key = i++;
				});

				self.changeWhoIsData(url, data);
			},
			error: function(xhr, status, err){
				console.error('There was an error!');
			}
		});

	}

	render() {
		console.log('Rendering SearchBar');


		return (
			<div>
				<form onSubmit={this.onFormSubmit.bind(this)}>
					<input 
						value={this.props.url} 
						onChange={this.handleChange}
						style={{
							display: 'block',
							marginLeft: 'auto', 
							marginRight: 'auto'
							}} 
					/>
				</form>
				
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		url: state.main.url
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({changeWhoIsData: changeWhoIsData, changeURL: changeURL}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

