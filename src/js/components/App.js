import React from 'react'

import SearchBar from './SearchBar'
import WhoIsList from '../containers/WhoIsList'

const App = () => (
	<div>
		<div style={{textAlign:'center'}}>Who Is Lookup</div>
		<SearchBar />
		<WhoIsList />
	</div>
);

export default App
