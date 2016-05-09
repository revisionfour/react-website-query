import React from 'react'

import SearchBar from './SearchBar'
import WhoIsList from '../containers/WhoIsList'

const App = () => (
	<div>
		<h1 className="text-center">Who Is Lookup</h1>
		<SearchBar />
		<WhoIsList />
	</div>
);

export default App
