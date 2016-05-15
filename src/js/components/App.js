import React from 'react'

import Nav from './Nav'

import SearchBar from './SearchBar'
// import WhoIsList from '../containers/WhoIsList'

// const App = () => (
// 	<div>
// 		<h1 className="text-center">Who Is Lookup</h1>
// 		<SearchBar />
// 		<WhoIsList />
// 	</div>
// );

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


// const App = () => (
// 	<div>
// 		<Nav />
// 		{this.props.children}
// 	</div>
// );

export default App
