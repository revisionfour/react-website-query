import { WHOIS_DATA_CHANGED } from '../actions/index'

const initialState = {
	whoIsData: []
}

export default function(state = initialState, action){
	switch(action.type){
		case WHOIS_DATA_CHANGED:
			return {
				whoIsData: action.whoIsData
			}
		default:
			return state;
	}
}