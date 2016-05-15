import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App';

import WhoIsLookUp from './components/WhoIsLookUp';
import TraceRoute from './components/TraceRoute';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={WhoIsLookUp} />
		<Route path="traceroute" component={TraceRoute} />
	</Route>
);