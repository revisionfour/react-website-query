import React from 'react'

import Nav from './Nav'

import SearchBar from './SearchBar'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTraceRoute } from '../actions/index';

import io from 'socket.io-client';

class App extends React.Component{

	constructor(){
		super();

		this.state = {
			hops: [],
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
			console.log('hop---> ' + hop);


			var newArray = self.state.hops.slice();

			if(self.state.isDone){
				console.log('clear it all');
				self.setState({
					hops:[],
					isDone:false
				});
				newArray = [];
			}

			// var newArray = self.state.hops.slice();


			newArray.push(hop);
			self.setState({hops:newArray});
			console.log('------------------');
			console.log(hop);

			self.props.changeTraceRoute(newArray, true);
		});

		/*socket.on('traceroutedone', function(hops){
			console.log('traceroutedone');
			self.props.changeTraceRoute(hops, false);
			self.setState({
				hops:hops,
				isDone:true
			});
		});*/

		socket.on('traceroutedone', function(hops){
			console.log('traceroutedone');
			self.props.changeTraceRoute(self.state.hops, false);
			self.setState({
				hops:hops,
				isDone:true
			});
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
		markers: state.TraceRoute.traceRoute
	}
}

// export default App

// Just added this, not clearing markers correctly. Do something

function mapDispatchToProps(dispatch){
	return bindActionCreators({changeTraceRoute},dispatch);
}

// export default connect(null, mapDispatchToProps)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);


