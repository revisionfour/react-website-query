import React from 'react'

import Nav from './Nav'

import SearchBar from './SearchBar'

import io from 'socket.io-client';

var socket = io();

class App extends React.Component{
	componentDidMount(){

		// var self = this;

		// socket = io();

		// socket.emit('connected!');

		// this.socket.on

		socket.on('init', function(message){

		  console.log('a user connected ->' + message);

		  /*
		  socket.on('disconnect', function(){
		    console.log('user disconnected');
		  });
		  */

		  

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

export default App
