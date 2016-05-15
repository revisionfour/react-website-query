import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeWhoIsData, changeURL, changeTraceRoute } from '../actions/index'

class SearchBar extends React.Component {
	constructor(){
		super();

		this.state = {
			display: 'none'
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		let address = e.target.value;

		address = address.replace(/(http:\/\/)|(www\\.)|(\/$)/g,'')

		if(address.match(/.+\.{1}.+/) === null && address != ''){
			this.setState({display:'block'});
		}
		else{
			this.setState({display:'none'});
		}

		this.props.changeURL(address);
	}

	onFormSubmit(e){
		e.preventDefault();

		var self = this.props;
		var url = self.url;

		// set AJAX for getwhoislookup

		$.ajax({
			url: 'getwhoislookup',
			method: 'POST',
			dataType: 'json',
			data: {
				address: url
			},
			success: function(data){
				var i=0;

				data.forEach(function(obj){
					obj.key = i++;
				});

				self.changeWhoIsData(data);
			},
			error: function(xhr, status, err){
				console.error('There was an error!');
			}
		});

		// set AJAX for gettraceroute

		$.ajax({
			url: 'gettraceroute',
			method: 'POST',
			dataType: 'json',
			data: {
				address: url
			},
			success: function(data){
				console.log(data);

				self.changeTraceRoute(data);
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
				<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
					<input 
						className="form-control"
						placeholder="Enter a url to lookup ex. lifehacker.com"
						onChange={this.handleChange}
					/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</form>
				<div className="text-warning" style={{display:this.state.display}}>Please enter a valid URL.</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		url: state.ActiveURL.url
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({changeWhoIsData, changeURL, changeTraceRoute}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({changeWhoIsData, changeURL}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(SearchBar);

