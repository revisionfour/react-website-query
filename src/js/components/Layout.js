import React from 'react';

import SearchBar from './SearchBar';

import Header from './Header';

// This is the main layout for the app

export default class Layout extends React.Component {
	constructor(){
		super();
		this.state = {
			url: 'example.com'
		};
	}

	changeURL(url){
		this.setState({url});
	}


	render(){
		return (
			<div>
				<Header />
				<div style={{textAlign:'center'}}>Who Is Lookup</div>
				<SearchBar url={this.state.url} changeURL={this.changeURL.bind(this)} />
				<div id="whois-output"></div>
			</div>
		)
	}

}