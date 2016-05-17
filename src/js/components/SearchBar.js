import React from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeWhoIsData, loadingWhoIsData, changeURL, changeTraceRoute, loadingTraceRoute} from '../actions/index';

class SearchBar extends React.Component {
	constructor(){
		super();

		this.state = {
			displayWarning: 'none'
		}

		this.handleChange = this.handleChange.bind(this);
	}

	/*componentDidMount(){
		
	}*/

	handleChange(e){
		let address = e.target.value;

		address = address.replace(/(http:\/\/)|(www\\.)|(\/$)/g,'')

		if(address.match(/.+\.{1}.+/) === null && address != ''){
			this.setState({displayWarning:'block'});
		}
		else{
			this.setState({displayWarning:'none'});
		}

		this.props.changeURL(address);
	}

	onFormSubmit(e){
		e.preventDefault();

		/*if(this.props.tracerouteLoading){
			this.setState({
				displayTraceroute: 'block',
				message: 'Must wait for traceroute to complete.'
			});
			return;
		}*/

		var self = this.props;
		var url = self.url;

		// set AJAX for getwhoislookup
		self.loadingWhoIsData();

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
		self.loadingTraceRoute();

		socket.emit('gettraceroute', {url});

		/*
		$.ajax({
			url: 'gettraceroute',
			method: 'POST',
			timeout: 120000,
			dataType: 'json',
			data: {
				address: url
			},
			success: function(data){
				console.log(data);

				self.changeTraceRoute(data);
			},
			error: function(xhr, status, err){
				console.error('Connection timed out!');
			}
		});
		*/

	}

	render() {
		console.log('Rendering SearchBar');

		return (
			<div>
				<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
					<input 
						className="form-control"
						placeholder="Enter a url to lookup ex. lifehacker.com"
						disabled={this.props.tracerouteLoading?'disabled':''}
						onChange={this.handleChange}
					/>
					<span className="input-group-btn">
						<button type="submit" disabled={this.props.tracerouteLoading?'disabled':''} className="btn btn-secondary">Submit</button>
					</span>
				</form>
				<div className="text-warning" style={{display:this.state.displayWarning}}>Please enter a valid URL.</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		url: state.ActiveURL.url,
		tracerouteLoading: state.TraceRoute.loading
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({changeWhoIsData, loadingWhoIsData, changeURL, changeTraceRoute, loadingTraceRoute}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

