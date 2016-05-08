import React from 'react';

import SearchBar from './SearchBar';

import Header from './Header';

import WhoIsTable from './WhoIsTable'

// This is the main layout for the app

export default class Layout extends React.Component {
	// constructor(){
	// 	super();
	// 	this.state = {
	// 		url: 'engadget.com',
	// 		whoIsData: [

	// 		]
	// 	};

	// 	this.changeURL = this.changeURL.bind(this);
	// 	this.changeWhoIsData = this.changeWhoIsData.bind(this);
	// }

	// changeURL(url){
	// 	this.setState({url});
	// }

	// changeWhoIsData(whoIsData){
	// 	this.setState({whoIsData})
	// }


	render(){
		console.log('Rendering Layout');

		return (
			<div>
				<div style={{textAlign:'center'}}>Who Is Lookup</div>
				<SearchBar url={this.state.url} changeURL={this.changeURL} changeWhoIsData={this.changeWhoIsData.bind(this)} />
				<WhoIsTable entries={this.state.whoIsData} />
			</div>
		)
	}

}