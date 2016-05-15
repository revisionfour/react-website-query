import { TRACEROUTE_DATA_CHANGED, TRACEROUTE_DATA_LOADING } from '../actions/index'

const initialState = {
	traceRoute: [],
	loading: false
}

export default function(state = initialState, action){
	switch(action.type){
		case TRACEROUTE_DATA_CHANGED:
			return {
				traceRoute: action.traceroute,
				loading: action.loading
			}
		case TRACEROUTE_DATA_LOADING:
			return {
				traceRoute: [],
				loading: action.loading
			}
		default:
			return state;
	}
}