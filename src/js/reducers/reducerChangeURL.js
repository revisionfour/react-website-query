import { URL_CHANGED } from '../actions/index'

const initialState = {
	url: 'engadget.com'
}

// export default function(state, action){

export default function(state = initialState, action){
	switch(action.type){
		case URL_CHANGED:
			return {
				url: action.url
			}
		default:
			return state;
	}
}

// export default function(state = initialState, action){
// 	switch(action.type){
// 		case 'URL_CHANGED':
// 			return {
// 				url: action.url,
// 				whoIsData: state.whoIsData
// 			}
// 		case WHOIS_DATA_CHANGED:
// 			return {
// 				url: action.url,
// 				whoIsData: action.whoIsData
// 			}
// 		case TRACEROUTE_DATA_CHANGED:
// 			return {
// 				traceroute: action.traceroute
// 			}
// 		default:
// 			return state;
// 	}
// }