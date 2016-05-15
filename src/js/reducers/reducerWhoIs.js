import { WHOIS_DATA_CHANGED, WHOIS_DATA_LOADING } from '../actions/index'

const initialState = {
	whoIsData: [],
	loading: false
}

export default function(state = initialState, action){
	switch(action.type){
		case WHOIS_DATA_CHANGED:
			return {
				whoIsData: action.whoIsData,
				loading: action.loading
			}
		case WHOIS_DATA_LOADING:
			return {
				whoIsData: [],
				loading: action.loading
			}
		default:
			return state;
	}
}