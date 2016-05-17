import { PING_DATA_CHANGED, PING_DATA_LOADING } from '../actions/index'

const initialState = {
	pingData: [],
	loading: false
}

export default function(state = initialState, action){
	switch(action.type){
		case PING_DATA_CHANGED:
			return {
				pingData: action.pingData,
				loading: action.loading
			}
		default:
			return state;
	}
}