import { combineReducers } from 'redux'

import ActiveURL from './reducerChangeURL'

const rootReducer = combineReducers({
	main: ActiveURL
});

export default rootReducer;