import { TRACEROUTE_DATA_CHANGED } from '../actions/index'

const initialState = {
	traceRoute: []
}

export default function(state = initialState, action){
	switch(action.type){
		case TRACEROUTE_DATA_CHANGED:
			return {
				traceRoute: action.traceroute
			}
		default:
			return state;
	}
}