import React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import rootReducer from './reducers';

import { Router, browserHistory } from 'react-router';

import routes from './routes';

// const store = createStore(rootReducer);
import {store} from './state/store';

const app = document.querySelector('.container');

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
, app);