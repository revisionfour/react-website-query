import React from 'react';

// import SearchBar from './SearchBar';
import WhoIsList from '../containers/WhoIsList';

class WhoIsLookUp extends React.Component{
	render(){
		console.log('Rendering WhoIsLookup');

		return (
			<div>
				<h1 className="text-center">Who Is Lookup</h1>
				<WhoIsList />
			</div>
		);
	}
}

export default WhoIsLookUp;