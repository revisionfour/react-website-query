import { combineReducers } from 'redux'

import ActiveURL from './reducerChangeURL'
import TraceRoute from './reducerTraceRoute'
import WhoIs from './reducerWhoIs'

const rootReducer = combineReducers({
	ActiveURL,
	TraceRoute,
	WhoIs
});

export default rootReducer;