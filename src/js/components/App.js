import React from 'react'

import Nav from './Nav'

import SearchBar from './SearchBar'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTraceRoute, changePing } from '../actions/index';

import io from 'socket.io-client';

class App extends React.Component{

	constructor(){
		super();

		this.state = {
			hops: [],
			pings:[],
			isDone: true
		}
	}

	componentDidMount(){
		socket.on('init', function(message){

		  console.log('Connected to server on port ' + message);

		  socket.on('disconnect', function(){
		    console.log('user disconnected');
		  });

		});
		
		var self = this;

		socket.on('traceroute', function(hop){
			var newArray = self.state.hops.slice();

			if(self.state.isDone){
				console.log('clear it all');
				self.setState({
					hops:[],
					isDone:false
				});
				newArray = [];
			}

			newArray.push(hop);
			self.setState({hops:newArray});

			self.props.changeTraceRoute(newArray, true);
		});

		socket.on('traceroutedone', function(){
			console.log('traceroutedone');
			self.props.changeTraceRoute(self.state.hops, false);
			self.setState({
				isDone:true
			});
		});

		socket.on('pingresult',function(data){
			console.log('Ping result!!!');
			console.log(data);

			// self.props.pingData

			self.props.changePing([...self.props.pingData, data], data == 'FINISHED' ? false : true);
		});

	}

	render(){
		console.log('Rendering App');

		return (
			<div>
				<SearchBar />
				<Nav />
				{this.props.children}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		markers: state.TraceRoute.traceRoute,
		pingData: state.Ping.pingData
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({changeTraceRoute, changePing },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


