import React from 'react'

import Nav from './Nav'

import SearchBar from './SearchBar'

class App extends React.Component{
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
