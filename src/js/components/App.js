import React from 'react'

import Nav from './Nav'

import SearchBar from './SearchBar'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeTraceRoute } from '../actions/index';

import io from 'socket.io-client';

// var socket = io();

class App extends React.Component{

	constructor(){
		super();

		this.state = {
			hop: [],
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

			if(self.state.isDone){
				console.log('clear it all');
				self.setState({
					hops:[],
					isDone:false
				});
			}

			var newArray = self.state.hops.slice();
			newArray.push(hop);
			self.setState({hops:newArray});
			console.log('------------------');
			console.log(hop);

			self.props.changeTraceRoute(newArray, true);
		});

		socket.on('traceroutedone', function(hops){
			console.log('traceroutedone');
			self.props.changeTraceRoute(hops, false);
			self.setState({
				hops:hops,
				isDone:true
			});
		});

	}

	render(){
		return (
			<div>
				<SearchBar />
				<Nav />
				{this.props.children}
			</div>
		);
	}
}

// export default App

function mapDispatchToProps(dispatch){
	return bindActionCreators({changeTraceRoute},dispatch);
}

export default connect(null, mapDispatchToProps)(App);
