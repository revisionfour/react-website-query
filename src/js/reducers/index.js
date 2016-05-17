import { combineReducers } from 'redux'

import ActiveURL from './reducerChangeURL'
import TraceRoute from './reducerTraceRoute'
import WhoIs from './reducerWhoIs'
import Ping from './reducerPing'

const rootReducer = combineReducers({
	ActiveURL,
	TraceRoute,
	Ping,
	WhoIs
});

export default rootReducer;