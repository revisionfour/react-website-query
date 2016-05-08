import React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import { Router, Route, IndexRoute, hashHistory } from "react-router";
// import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

// import Layout from './components/Layout';

import App from './components/App';

import rootReducer from './reducers'

const app = document.getElementById('app');

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>
, app);
