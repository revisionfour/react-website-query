import React from "react";
import { render } from "react-dom";

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App';

import rootReducer from './reducers'

const app = document.querySelector('.container');

const store = createStore(rootReducer);

render(
	<Provider store={store}>
		<App />
	</Provider>
, app);
