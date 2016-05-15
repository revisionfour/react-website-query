import { URL_CHANGED } from '../actions/index'

const initialState = {
	url: 'engadget.com'
}

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